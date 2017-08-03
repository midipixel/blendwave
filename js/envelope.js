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
                        default: 0.04,
                        value: 0.04,
                        min: 0,
                        max: 3,
                        step: 0.01
                    },
                    release: {
                        name: 'Release',
                        default: 0.3,
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
                        default: 5,
                        value: 5,
                        min: 0,
                        max: 20,
                        step: 0.1
                    },
                    depth: {
                        name: 'Força',
                        default: 1,
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
                        default: 0,
                        value: 0,
                        min: -12,
                        max: 12,
                        step: 1
                    }
                }
            },
            pitch_osc: {
                name: 'Oscilar Pitch',
                active: false,
                params: {
                    speed: {
                        name: 'Velocidade',
                        default: 0.5,
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
        postPlayUpdate: function(){
            patch.effects.vibrato.set();
            //Multiply pitch value by 100 because values are shown in semitones in the UI
            patch.sound.sourceNode.detune.value = this.pitch.params.amount.value * 100;
        },
        setAmpOSC: function(){
            this.amp_osc.active = !this.amp_osc.active;

            if(this.amp_osc.active){
                patch.sound.addEffect(this.amp_osc.pizEffect);
            }
            else{
                patch.sound.removeEffect(this.amp_osc.pizEffect);
            }
        },
        setPitchOSC: function(){
            if (this.pitch_osc.active){
                var osc = Pizzicato.context.createOscillator();
                osc.frequency.value = patch.data.vibrato_speed;
                osc.connect(patch.sound.sourceNode.playbackRate);
                osc.start();
            }
        },
        resetDefaults: function(){
            // Reset every parameter with its default value
            for (item in this._data){
                for(param in this._data[item].params){
                    this._data[item].params[param].value = this._data[item].params[param].default;
                }
            }
        }
    },
    mounted: function(){
        //Create Tremolo when the component is mounted
        this.amp_osc.pizEffect = new Pizzicato.Effects.Tremolo({
            mix: 1,
            speed: parseFloat(this.amp_osc.params.speed.value),
            depth: parseFloat(this.amp_osc.params.depth.value)
        });
    }
});
