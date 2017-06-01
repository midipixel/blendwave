var effects = {
    reverb : {
        name : "reverb",
        description : "reverbera o som",
    },
    delay : {
        name : "delay",
        description : "promove atraso do som",
    },
    distortion : {
        name : "distortion",
        description : "distorce som",
    },
    flanger : {
        name : "flanger",
        description : "bobina na cabeça",
    },
    ring_modulator : {
        name : "ring_modulator",
        description : "modula o anel",
    },
    compressor : {
        name : "compressor",
        description : "comprime loucamente",
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

Vue.component('distortion', {
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

Vue.component('flanger', {
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

Vue.component('ring_modulator', {
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

Vue.component('compressor', {
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