Vue.component('None', {
    template: '#fxTemplate',
    data: function() {
        return {
            fxName: effects.none.name,
            fxDescription: effects.none.description,
            img: 'img/none.png',
            params: []
        }
    }
});

Vue.component('Reverb', {
    template: '#fxTemplate',
    data: function() {
        return {
            fxName: effects.reverb.name,
            fxDescription: effects.reverb.description,
            img: 'img/reverb.png',
            params: [
                {
                    name: 'time',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'decay',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 0.5,
                },
                {
                    name: 'mix',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 0.8,
                }
            ]
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

Vue.component('Delay', {
    template: '#fxTemplate',
    data: function() {
        return {
            fxName: effects.delay.name,
            fxDescription: effects.delay.description,
            img: 'img/delay.png',
            params: [
                {
                    name: 'time',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'decay',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'mix',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                }
            ]
        }
    }
});

Vue.component('Distortion', {
    template: '#fxTemplate',
    data: function() {
        return {
            fxName: effects.distortion.name,
            fxDescription: effects.distortion.description,
            img: 'img/distortion.png',
            params: [
                {
                    name: 'time',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'decay',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'mix',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                }
            ]
        }
    }
});

Vue.component('Flanger', {
    template: '#fxTemplate',
    data: function() {
        return {
            fxName: effects.flanger.name,
            fxDescription: effects.flanger.description,
            img: 'img/flanger.png',
            params: [
                {
                    name: 'time',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'decay',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'mix',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                }
            ]
        }
    }
});

Vue.component('RingModulator', {
    template: '#fxTemplate',
    data: function() {
        return {
            fxName: effects.ring_modulator.name,
            fxDescription: effects.ring_modulator.description,
            img: 'img/ring_modulator.png',
            params: [
                {
                    name: 'time',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'decay',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'mix',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                }
            ]
        }
    }
});

Vue.component('Compressor', {
    template: '#fxTemplate',
    data: function() {
        return {
            fxName: effects.compressor.name,
            fxDescription: effects.compressor.description,
            img: 'img/compressor.png',
            params: [
                {
                    name: 'time',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'decay',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                },
                {
                    name: 'mix',
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: 1,
                }
            ]
        }
    }
});

Vue.component('effect', {
    props: ['name', 'description', 'img'],
    template: '#effectTemplate',
    data: function() {
        return {
            params: []
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
            selected: 'Reverb',
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
        },
        printParams: function(param){
            console.log(param);
        }
    }
});

