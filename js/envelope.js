Vue.component('envelopepanel', {
    props: ['active'],
    template: '#envelopePanel',
    data: function(){
        return {
            volume_amp: {
                name: 'Volume',
                active: true,
                params: {
                    attack: {
                        name: 'Attack',
                        value: 0.5,
                        min: 0,
                        max: 3,
                        step: 0.01
                    },
                    release: {
                        name: 'Release',
                        value: 0.3,
                        min: 1,
                        max: 3,
                        step: 0.01
                    }
                }
            },
            volume_osc: {
                name: 'Oscilar Volume',
                active: false,
                params: {
                    speed: {
                        name: 'Velocidade',
                        value: 0.5,
                        min: 0,
                        max: 3,
                        step: 0.01
                    },
                    amount: {
                        name: 'Força',
                        value: 0.3,
                        min: 1,
                        max: 3,
                        step: 0.01
                    }
                }
            },
            pitch: {
                name: 'Pitch',
                params: {
                    amount: {
                        name: 'Quantidade',
                        value: 0.5,
                        min: 0,
                        max: 3,
                        step: 0.01
                    }
                }
            },
            pitch_osc: {
                name: 'Oscilar Pitch',
                active: false,
                params: {
                    speed: {
                        name: 'Velocidade',
                        value: 0.5,
                        min: 0,
                        max: 3,
                        step: 0.01
                    }
                }
            }
        }
    },
    methods: {
        prePlayUpdate: function(){
            patch.sound.attack = parseFloat(this.volume_amp.params.attack.value);
            patch.sound.release = parseFloat(this.volume_amp.params.release.value);
        }
    }
});
