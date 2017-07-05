var effects = {
    none : {
        name : "None",
        description : "Escolha um efeito",
    },
    reverb : {
        name : "Reverb",
        img : "img/reverb.png",
        description : "Reverbera o som",
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
