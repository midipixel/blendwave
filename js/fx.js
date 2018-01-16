Vue.component('fxpanel', {
    props: ['active'],
    template: '#fxPanel', 
    data: function(){
        return {
            content: content.fxPanel,
            fxSlots : {
                fxSlot1: {
                    active: false,
                    selected: 'none',
                    pizEffect: {},
                    fxData: {}
                },
                fxSlot2: {
                    active: false,
                    selected: 'none',
                    pizEffect: {},
                    fxData: {}
                }
            }
        }
    },
    methods: {
        toggleFX: function(slot){
            var fxSlot = this.fxSlots[slot];

            // Toggle Active State
            fxSlot.active = !fxSlot.active;

            // Change UI according to the effect being active or not
            if(fxSlot.active) {
                document.querySelector('#' + slot + ' .fxControls select').removeAttribute('disabled');
            }
            else {
                document.querySelector('#' + slot + ' .fxControls select').setAttribute('disabled', 'disabled');
            }
        },
        getParams: function(fxSlot, effect){
            // Create a neat object with the param:value format
            var fxParams = {};

            for (index in fxSlot.fxData[effect].params){
                var param = fxSlot.fxData[effect].params[index];
                fxParams[param.id] = param.value;
            }

            //console.log(fxParams);
            return fxParams;
        },        
        setFX: function(slot){
            var fxSlot = this.fxSlots[slot];
            var effect = this.fxSlots[slot].selected;

            //If there is a Pizzicato effect applied
            if(fxSlot.pizEffect.outputNode){
                //Remove it from the patch and clear its reference from the vue instance
                patch.sound.removeEffect(fxSlot.pizEffect);
                fxSlot.pizEffect = {};
            }

            if (effect != 'none'){
                var fxParams = this.getParams(fxSlot, effect);
                
                //Create a new pizzicato effect from user selection, passing the params object
                var pizString = effect === 'ringmodulator' ? 'RingModulator' : util.capitalize(effect);
                fxSlot.pizEffect = new Pizzicato.Effects[pizString](fxParams);
                
                //Apply effect to sound
                patch.sound.addEffect(fxSlot.pizEffect);
            }
        },
        resetFX: function(){
            for (var slot in this.fxSlots){
                if(this.fxSlots[slot].selected != "none"){
                    var currentParams = this.fxSlots[slot].fxData[this.fxSlots[slot].selected].params;
                    var defaultParams = effects[this.fxSlots[slot].selected].params;

                    // Reset current params to default
                    for (i in currentParams){
                        currentParams[i].value = defaultParams[i].value;
                    }

                    // Reset UI and states
                    this.fxSlots[slot].selected = 'none';
                    this.fxSlots[slot].pizEffect = {};
                }

                if(this.fxSlots[slot].active){
                    this.toggleFX(slot);
                }
            }
        },
        prePlayUpdate: function(){
            for (var slot in this.fxSlots){
                //Only update effects parameters if the slot is active
                if(this.fxSlots[slot].active){
                    // Update pizzicato parameters with the current FX params
                    if (this.fxSlots[slot].selected != 'none'){
                        var fxParams = this.getParams(this.fxSlots[slot], this.fxSlots[slot].selected);
                        // The ringmod mix param needs a good reduction before being applied
                        if(this.fxSlots[slot].selected === 'ringmodulator'){
                            fxParams['mix'] = fxParams['mix']/4;
                        }
                        // Update params
                        for(var param in fxParams){
                            this.fxSlots[slot].pizEffect[param] = fxParams[param];
                        }
                    }
                }
                // If the slot is inactive, mute the effect
                else{    
                    if(this.fxSlots[slot].selected != 'Distortion'){
                        this.fxSlots[slot].pizEffect.mix = 0;                    
                    }
                    else{
                        // Distortion can't really be muted, and setting the gain to 0 lowers the audio, so I'm hacking it
                        this.fxSlots[slot].pizEffect.gain = 0.1;                    
                    }                
                }
            }
        }
    },
    computed: {
        getSnapshot: function(){
            return {
                fxSlot1: this.fxSlots.fxSlot1.active,
                fxSlot2: this.fxSlots.fxSlot2.active
            }
        }
    },
    mounted: function(){
        // On mount, create deep copies of effects params for each slot
            this.fxSlots.fxSlot1.fxData = JSON.parse(JSON.stringify(effects));
            this.fxSlots.fxSlot2.fxData = JSON.parse(JSON.stringify(effects));
    }
});
