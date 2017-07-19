Vue.component('effect', {
    props: ['id'],
    template: '#effectTemplate',
    data: function() {
        return {
            fxList: effects
        };
    },
    methods: {
        updatePatch: function(){
            for (param in this.params){
                console.log(this.params[param].value);
            }
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
                pizEffect: {}
            },
            fxSlot2: {
                active: false,
                selected: 'none',
                pizEffect: {}
            },            
        },
        ui: {
            fxButtonText: 'off'
        }
    },
    methods: {
        toggleFX: function(slot){
            var fxSlot = this.fxSlots[slot];
            console.log(slot);
            
            // Toggle Active State and Button Text
            fxSlot.active = !fxSlot.active;

            // Change UI according to the effect being active or not
            if(fxSlot.active) {
                this.ui.fxButtonText = 'on'
                document.querySelector('.fxControls select').removeAttribute('disabled');
            }
            else {
                this.ui.fxButtonText = 'off';
                document.querySelector('.fxControls select').setAttribute('disabled', 'disabled');
            }

            // If an Effect is selected, toggle the mix value
            if(fxSlot.selected != 'none'){
                fxSlot.active ? fxSlot.pizEffect.mix = 1 : fxSlot.pizEffect.mix = 0;
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
            this.fxSlots[fxSlot1].selected = 'none';
            this.fxSlots[fxSlot1].pizEffect = {};
            this.toggleFX(this.fxSlots[fxSlot1]);
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

