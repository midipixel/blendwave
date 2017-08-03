Vue.component('envelopepanel', {
    props: ['active'],
    template: '#envelopePanel',
    data: function(){
        return {
            amp_envelope: {
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
            amp_osc: {
                name: 'Oscilar Volume',
                active: false,
                pizEffect: {},
                params: {
                    speed: {
                        name: 'Velocidade',
                        value: 5,
                        min: 0,
                        max: 20,
                        step: 0.1
                    },
                    depth: {
                        name: 'Força',
                        value: 1,
                        min: 0,
                        max: 1,
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
            //Amp Envelope
            patch.sound.attack = parseFloat(this.amp_envelope.params.attack.value);
            patch.sound.release = parseFloat(this.amp_envelope.params.release.value);
            //Amp OSC
            this.amp_osc.pizEffect.speed = parseFloat(this.amp_osc.params.speed.value);
            this.amp_osc.pizEffect.depth = parseFloat(this.amp_osc.params.depth.value);
        },
        setAmpOSC: function(){
            this.amp_osc.active = !this.amp_osc.active;

            if(this.amp_osc.active){
                patch.sound.addEffect(this.amp_osc.pizEffect);
            }
            else{
                patch.sound.removeEffect(this.amp_osc.pizEffect);
            }
        }
    },
    mounted: function(){
        this.amp_osc.pizEffect = new Pizzicato.Effects.Tremolo({
            mix: 1,
            speed: parseFloat(this.amp_osc.params.speed.value),
            depth: parseFloat(this.amp_osc.params.depth.value)
        });
    }
});
