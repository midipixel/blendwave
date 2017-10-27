var effects = {
    reverb: {
        key: 'reverb',
        img: 'img/reverb.png',
        params: [
            {
                id: 'time',
                value: 0.5,
                min: 0,
                max: 3,
                step: 0.01
            },
            {
                id: 'decay',
                value: 0.3,
                min: 1,
                max: 3,
                step: 0.01
            },
            {
                id: 'mix',
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    },
    delay: {
        key: 'delay',
        img: 'img/delay.png',
        params: [
            {
                id: 'time',
                value: 0.4,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                id: 'feedback',
                value: 0.6,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                id: 'mix',
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    },
    distortion: {
        key: 'distortion',
        img: 'img/distortion.png',
        params: [
            {
                id: 'gain',
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    },
    flanger: {
        key: 'flanger',
        img: 'img/flanger.png',
        params: [
            {
                id: 'time',
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                id: 'speed',
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                id: 'depth',
                value: 0.1,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                id: 'feedback',
                value: 0.1,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                id: 'mix',
                value: 1,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    },
    ringmodulator: {
        key: 'ringmodulator',
        img: 'img/ringmodulator.png',
        params: [
            {
                id: 'speed',
                value: 110,
                min: 0,
                max: 2000,
                step: 1
            },
            {
                id: 'distortion',
                value: 1,
                min: 0.1,
                max: 50,
                step: 0.1
            },
            {
                id: 'mix',
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    }
}
