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
            pizEffect: undefined
        },
        fxSlot2: {
            active: false,
            selected: 'none',
            pizEffect: undefined
        }
    },
    methods: {
        setFX: function(fxSlot, effect){

             //If there is a Pizzicato effect applied, remove it
            if(fxSlot.pizEffect != undefined){
                patch.sound.removeEffect(fxSlot.pizEffect);
            }

            if (effect != 'none'){
                //Create a new effect from user selection, default mix to 0
                fxSlot.pizEffect = new Pizzicato.Effects[effect]();
                fxSlot.pizEffect.mix = 0;

                //Apply effect to sound
                patch.sound.addEffect(fxSlot.pizEffect);
            }
        },
        activateFX: function(fxSlot, isActive){
            fxSlot.active = isActive;

            if(fxSlot.pizEffect != undefined){
                isActive ? fxSlot.pizEffect.mix = 1 : fxSlot.pizEffect.mix = 0;
            }

            console.log(fxSlot.active);
            console.log(fxSlot.pizEffect.mix);
        }
    }
});

