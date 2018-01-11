Vue.component('envelopepanel', {
    props: ['active'],
    template: '#envelopePanel',
    data: function(){
        return {
            content: content.envelopePanel,
            amp_envelope: {
                name: 'Amp Envelope',
                active: false,
                params: {
                    attack: {
                        name: 'attack',
                        default: 0,
                        value: 0,
                        min: 0,
                        max: 5,
                        step: 0.1
                    },
                    release: {
                        name: 'release',
                        default: 1,
                        value: 1,
                        min: 0.3,
                        max: 5,
                        step: 0.1
                    }
                }
            },
            amp_osc: {
                name: 'Oscilar Volume',
                active: false,
                pizEffect: {},
                params: {
                    speed: {
                        name: 'speed',
                        default: 5,
                        value: 5,
                        min: 0,
                        max: 20,
                        step: 0.1
                    },
                    depth: {
                        name: 'depth',
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
                active: false,
                params: {
                    amount: {
                        name: 'amount',
                        default: 0,
                        value: 0,
                        min: -24,
                        max: 24,
                        step: 1
                    }
                }
            },
            pitch_osc: {
                name: 'Oscilar Pitch',
                active: false,
                params: {
                    speed: {
                        name: 'speed',
                        default: 5,
                        value: 5,
                        min: 0,
                        max: 10,
                        step: 0.1
                    }
                }
            }
        }
    },
    methods: {
        prePlayUpdate: function(){
            //Amp Envelope
            if (this.amp_envelope.active){
                patch.sound.attack = parseFloat(this.amp_envelope.params.attack.value) + 0.04;
                ampEnvelope.release.value = parseFloat(this.amp_envelope.params.release.value);
            }
            //Amp OSC
            this.amp_osc.pizEffect.speed = parseFloat(this.amp_osc.params.speed.value);
            this.amp_osc.pizEffect.depth = parseFloat(this.amp_osc.params.depth.value);
        },
        postPlayUpdate: function(){
            this.setPitchOSC();

            if (this.pitch.active){
                //Multiply pitch value by 100 because values are shown in semitones in the UI
                patch.sound.sourceNode.detune.value = this.pitch.params.amount.value * 100;
            }
        },
        setAmpOSC: function(){
            this.amp_osc.active = !this.amp_osc.active;

            if (this.amp_osc.active){
                patch.sound.addEffect(this.amp_osc.pizEffect);
            }
            else{
                patch.sound.removeEffect(this.amp_osc.pizEffect);
            }
        },
        setPitchOSC: function(){
            if (this.pitch_osc.active){
                var osc = Pizzicato.context.createOscillator();
                osc.frequency.value = this.pitch_osc.params.speed.value;
                osc.connect(patch.sound.sourceNode.playbackRate);
                osc.start();
            }
        },
        resetDefaults: function(){
            // Reset every slider with its default value
            for (item in this._data){
                for(param in this._data[item].params){
                    this._data[item].params[param].value = this._data[item].params[param].default;
                }
            }

            // Reset parameters initial active state
            this.amp_envelope.active = false;
            this.amp_osc.active = false;
            this.pitch.active = false;
            this.pitch_osc.active = false;
        }
    },
    computed: {
        getSnapshot: function(){
            return {
                amp_envelope: this.amp_envelope.active,
                amp_osc: this.amp_osc.active,
                pitch: this.pitch.active,
                pitch_osc: this.pitch_osc.active
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

        //Replace (b) flags with <b> tags to format the multi-colored title
        var titleText = $('#envelope h3').html();
        var newText = titleText.split('(b)').join('<b>').split('(/b)').join('</b>');
        $('#envelope h3').html(newText);
    }
});
