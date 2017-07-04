fxPanel = new Vue({
    el: '#fx',
    data: {
        fxList : effects,
        fxSlot1: {
            selected: 'None',
            pizEffect: undefined
        },
        fxSlot2: {
            selected: 'None',
            pizEffect: undefined
        }
    },
    methods: {
        setFX: function(fxSlot, effect){

            //If there is a Pizzicato effect applied, remove it
            if(fxSlot.pizEffect != undefined){
                patch.sound.removeEffect(fxSlot.pizEffect);
            }

            //Create a new effect from user selection
            fxSlot.pizEffect = new Pizzicato.Effects[effect]();

            //Apply effect to sound
            patch.sound.addEffect(fxSlot.pizEffect);
          }
    }
});