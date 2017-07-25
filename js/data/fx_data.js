var effects = {
    reverb : {
        name : "Reverb",
        description : "Reverbera o som",
        img : "img/reverb.png",
        params: [
            {
                name: 'time',
                value: 0.5,
                min: 0,
                max: 3,
                step: 0.01
            },
            {
                name: 'decay',
                value: 0.3,
                min: 1,
                max: 3,
                step: 0.01
            },
            {
                name: 'mix',
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    },
    delay : {
        name : "Delay",
        description : "Promove atraso do som",
        img : "img/delay.png",
        params: [
            {
                name: 'feedback',
                value: 0.6,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'time',
                value: 0.4,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'mix',
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    },
    distortion : {
        name : "Distortion",
        description : "Distorce som",
        img : "img/distortion.png",
        params: [
            {
                name: 'gain',
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    },
    flanger : {
        name : "Flanger",
        description : "Bobina na cabeça",
        img : "img/flanger.png",
        params: [
            {
                name: 'time',
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'speed',
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'depth',
                value: 0.1,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'feedback',
                value: 0.1,
                min: 0,
                max: 1,
                step: 0.01
            },            
            {
                name: 'mix',
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    },
    ringmodulator : {
        name : "RingModulator",
        description : "Modula o anel",
        img : "img/ring_modulator.png",
        params: [
            {
                name: 'speed',
                value: 30,
                min: 0,
                max: 2000,
                step: 1
            },
            {
                name: 'distortion',
                value: 1,
                min: 0.2,
                max: 50,
                step: 0.1
            },
            {
                name: 'mix',
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    },
    compressor : {
        name : "Compressor",
        description : "Comprime loucamente",
        img : "img/compressor.png",
        params: [
            {
                name: 'threshold',
                value: -40,
                min: -100,
                max: 0,
                step: 1
            },
            {
                name: 'ratio',
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            },            
            {
                name: 'attack',
                value: 0.03,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'release',
                value: 0,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    }
};
