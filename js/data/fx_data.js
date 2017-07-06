var effects = {
    /* In the meanwhile, id is used to fetch data and name is used to display the effect name
    in the front end, and also to create the pizzicato effect */
    reverb : {
        id : "reverb",
        name : "Reverb",
        description : "Reverbera o som",
        img : "img/reverb.png",
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
    },
    delay : {
        id : "delay",
        name : "Delay",
        description : "Promove atraso do som",
        img : "img/delay.png",
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
    },
    distortion : {
        id : "distortion",
        name : "Distortion",
        description : "Distorce som",
        img : "img/distortion.png",
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
    },
    flanger : {
        id : "flanger",
        name : "Flanger",
        description : "Bobina na cabeça",
        img : "img/flanger.png",
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
    },
    ringmodulator : {
        id : "ringmodulator",
        name : "RingModulator",
        description : "Modula o anel",
        img : "img/ring_modulator.png",
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
    },
    compressor : {
        id : "compressor",
        name : "Compressor",
        description : "Comprime loucamente",
        img : "img/compressor.png",
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
};
