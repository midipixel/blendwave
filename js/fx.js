Vue.component('effect', {
    props: ['effectname'],
    template: '#effectTemplate',
    data: function() {
        return {
            fxList: effects,
            fxParams: this.getFxParams(this.effectname)
        };
    },
    methods: {
        getFxParams: function(id){
            // Create a unique copy from the effects object, or vue will make a reference
            var effectsCopy = JSON.parse(JSON.stringify(effects)); 
            // Clone the params array
            var params = [];
            params = effectsCopy[id].params.slice();

            return params;
        }
    }
});

fxPanel = new Vue({
    el: '#fx',
    data: {
        fxList : effects,
        fxSlots : {
            fxSlot1: {
                active: false,
                selected: 'none',
                pizEffect: {},
                fxButtonText: 'off'
            },
            fxSlot2: {
                active: false,
                selected: 'none',
                pizEffect: {},
                fxButtonText: 'off'
            },            
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

            // If an Effect is selected, toggle the mix value
            if(fxSlot.selected != 'none'){
                fxSlot.active ? fxSlot.pizEffect.mix = 1 : fxSlot.pizEffect.mix = 0;
                console.log(fxSlot.pizEffect);
            }

        },
        setFX: function(slot){
            var fxSlot = this.fxSlots[slot];
            var effect = fxSlot.selected;
            
             //If there is a Pizzicato effect applied, remove it
            if(fxSlot.pizEffect.outputNode){
                patch.sound.removeEffect(fxSlot.pizEffect);
            }

            if (effect != 'none'){
                var fxParams = this.getParams(fxSlot);
                
                //Create a new pizzicato effect from user selection, passing the params object
                fxSlot.pizEffect = new Pizzicato.Effects[effect](fxParams);
                
                //Apply effect to sound
                patch.sound.addEffect(fxSlot.pizEffect);
            }
        },
        resetFX: function(){
            for (var slot in this.fxSlots){
                this.fxSlots[slot].selected = 'none';
                this.fxSlots[slot].pizEffect = {};
                this.toggleFX(slot);                
            }
        },
        getParams: function(slot){
            var fxSlot = slot;
            
            //Iterate on the effect properties, returning the parameters in the pizzicato object format
            var effect = fxSlot.selected; 
            var key = effect.toLowerCase();
            var fxParams = {};

            for (var i in this.fxList[key].params){
                fxParams[this.fxList[key].params[i].name] = this.fxList[key].params[i].value;
            }; 
 
            return fxParams;
        }
    }
});

