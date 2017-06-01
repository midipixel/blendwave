var effects = {
    reverb : {
        name : "reverb",
        description : "reverbera o som",
        params : {
            time : 0,
            decay : 0,
            mix : 0
        }
    },
    delay : {
        name : "delay",
        description : "promove atraso do som",
        params : {
            param1 : 0,
            param2 : 0
        }
    },
    distortion : {
        name : "distortion",
        description : "distorce som",
        params : {
            param1 : 0,
            param2 : 0
        }
    },
    flanger : {
        name : "flanger",
        description : "bobina na cabeça",
        params : {
            param1 : 0,
            param2 : 0
        }
    },
    ringmod : {
        name : "ring_modulator",
        description : "modula o anel",
        params : {
            param1 : 0,
            param2 : 0
        }
    },
    compressor : {
        name : "compressor",
        description : "comprime loucamente",
        params : {
            param1 : 0,
            param2 : 0
        }
    }
};

Vue.component('reverb', {
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

Vue.component('delay', {
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

fxPanel = new Vue({
    el: '#fx',
    data: {
        fxList : effects,
        fx1: {
            selected: 'reverb'
        },
        fx2: {
            selected: 'reverb'
        }
    },
    methods: {

    }
});