var effects = {
    /* In the meanwhile, id is used to fetch data and name is used to display the effect name
    in the front end, and also to create the pizzicato effect */
    reverb : {
        name : "Reverb",
        description : "Reverbera o som",
        img : "img/reverb.png",
        params: [
            {
                name: 'time',
                value: 1,
                min: 0,
                max: 3,
                step: 0.01
            },
            {
                name: 'decay',
                value: 0.3,
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
    delay : {
        name : "Delay",
        description : "Promove atraso do som",
        img : "img/delay.png",
        params: [
            {
                value: 1,
                name: 'feedback',
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'time',
                value: 1,
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
    distortion : {
        name : "Distortion",
        description : "Distorce som",
        img : "img/distortion.png",
        params: [
            {
                name: 'gain',
                value: 1,
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
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'decay',
                value: 1,
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
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'distortion',
                value: 1,
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
    compressor : {
        name : "Compressor",
        description : "Comprime loucamente",
        img : "img/compressor.png",
        params: [
            {
                name: 'threshold',
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'attack',
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'release',
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'ratio',
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    }
};
