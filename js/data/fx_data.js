var effects = {
    none : {
        name : "None",
        description : "Escolha um efeito",
    },
    reverb : {
        name : "Reverb",
        description : "Reverbera o som",
    },
    delay : {
        name : "Delay",
        description : "Promove atraso do som",
    },
    distortion : {
        name : "Distortion",
        description : "Distorce som",
    },
    flanger : {
        name : "Flanger",
        description : "Bobina na cabeça",
    },
    ring_modulator : {
        name : "RingModulator",
        description : "Modula o anel",
    },
    compressor : {
        name : "Compressor",
        description : "Comprime loucamente",
    }
};

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