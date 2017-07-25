// Load effects data from JSON file
var effects;

$.getJSON( "js/data/fx_data.json", function(fxData) {
    effects = fxData;
});

Vue.component('fxpanel', {
    template: '#fxPanel', 
    data: function(){
        return {
            fxList : effects,
            fxSlots : {
                fxSlot1: {
                    active: false,
                    selected: 'none',
                    fxButtonText: 'off',
                    pizEffect: {},
                    params: {}                    
                },
                fxSlot2: {
                    active: false,
                    selected: 'none',
                    fxButtonText: 'off',
                    pizEffect: {},
                    params: {}                    
                },            
            }   
        }
    },
    methods: {
        toggleFX: function(slot){
            var fxSlot = this.fxSlots[slot];
            
            // Toggle Active State and Button Text
            fxSlot.active = !fxSlot.active;

            // Change UI according to the effect being active or not
            if(fxSlot.active) {
                fxSlot.fxButtonText = 'on'
                document.querySelector('#' + slot + ' .fxControls select').removeAttribute('disabled');
            }
            else {
                fxSlot.fxButtonText = 'off';
                document.querySelector('#' + slot + ' .fxControls select').setAttribute('disabled', 'disabled');
            }
        },
        loadDefaultParams: function(slot, effect){
            // Create a unique copy from the effects object, or vue will make a reference
            var effectsCopy = JSON.parse(JSON.stringify(effects[effect].params));

            // Create a neat object with the param:value format
            var defaultParams = {};        
            for (param in effectsCopy){
                defaultParams[param] = effectsCopy[param].value;                
            }
                
            // Clone the params array
            //var params = [];
            //params = effectsCopy[effect].params.slice();

            console.log(defaultParams);
            return defaultParams;
        },
        updateData: function(slot, fxParams){
            // Update slot data with an effect's parameters in a nice key value format
            for (var param in fxParams){
                this.fxSlots[slot].params[param] = fxParams[param];
            };    
            
            console.log(this.fxSlots[slot].params);
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
                var fxParams = this.loadDefaultParams(fxSlot, effect);
                  
                //Update slot data with the effect's initial parameters
                this.updateData(slot, fxParams);
                
                //Create a new pizzicato effect from user selection, passing the params object
                var pizString = util.capitalize(effect);
                fxSlot.pizEffect = new Pizzicato.Effects[pizString](fxParams);
                
                //Apply effect to sound
                patch.sound.addEffect(fxSlot.pizEffect);
            }
        },
        resetFX: function(){
            for (var slot in this.fxSlots){
                this.fxSlots[slot].selected = 'none';
                this.fxSlots[slot].pizEffect = {};
                //this.turnOffFX(slot);                
            }
        },
        prePlayUpdate: function(){
            for (var slot in this.fxSlots){
                //Only update effects parameters if the slot is active
                if(this.fxSlots[slot].active){
                    // Update pizzicato parameters with the ones from the slot data object
                    if (this.fxSlots[slot].selected != 'none'){
                        for(var param in this[slot].params){
                            this.fxSlots[slot].pizEffect[param] = this.fxSlots[slot].params[param];
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
        },
        teste: function(){
            /*console.log(this.fxSlots['fxSlot1'].params);
            console.log(this.fxSlots['fxSlot2'].params);*/
        }
    }
});


