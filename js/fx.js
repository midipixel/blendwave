Vue.component('effect', {
    props: ['id'],
    template: '#effectTemplate',
    data: function() {
        return {
            fxList: effects
        }
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
        ui: {
            fxButtonText: 'off'
        }
    },
    methods: {
        toggleFX: function(fxSlot){
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
        setFX: function(fxSlot, effect){
             //If there is a Pizzicato effect applied, remove it
            if(fxSlot.pizEffect.outputNode){
                patch.sound.removeEffect(fxSlot.pizEffect);
            }

            if (effect != 'none'){
                //Iterate on the effect's parameters and create an object from them
                var key = effect.toLowerCase();
                var fxParams = {};

                for (i in this.fxList[key].params){
                    fxParams[this.fxList[key].params[i].name] = this.fxList[key].params[i].value;
                }; 
                
                //Create a new pizzicato effect from user selection, passing the params object
                fxSlot.pizEffect = new Pizzicato.Effects[effect](fxParams);
                
                //Apply effect to sound
                patch.sound.addEffect(fxSlot.pizEffect);
            }
        },
        resetFX: function(){
            this.fxSlot1.selected = 'none';
            this.fxSlot1.pizEffect = {};
            this.toggleFX(this.fxSlot1);
        }
    }
});

