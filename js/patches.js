var default_data = {
    file: 'samples/sine.wav',
    attack: 0.01,
    release: 0.04,
    detune: 1,
    tremolo_speed: 5,
    tremolo_depth: 1,
    vibrato_speed: 2,
    filter_type: 'noFilter',
    filter_cutoff: 100,
    filterOSC_speed: 1,
    filterOSC_depth: 0,
}

var patch = {
    data: {
        file: '',
        attack: 0,
        release: 0,
        detune: 0,
        tremolo_speed: 0,
        tremolo_depth: 0,
        vibrato_speed: 0,
        filter_type: 'noFilter',
        filter_cutoff: 500,
        filterOSC_speed: 1,
        filterOSC_depth: 0,
    },
    effects: {
        tremolo: new Pizzicato.Effects.Tremolo({
            mix: 1,
            speed: default_data.tremolo_speed,
            depth: default_data.tremolo_depth
        }),
        vibrato: {
            on: false,
            set: function(){
                if (this.on){
                    var osc = Pizzicato.context.createOscillator();
                    osc.frequency.value = patch.data.vibrato_speed;
                    osc.connect(patch.sound.sourceNode.playbackRate);
                    osc.start();
                }
            }
        },
        filter: {
            lp : new Pizzicato.Effects.LowPassFilter({
                frequency: 500,
                mix: 0,
                peak: 10
            }),
            hp : new Pizzicato.Effects.HighPassFilter({
                frequency: 500,
                mix: 0
            }),
            oscillator: {
                on: false,
                set: function(){
                    if (this.on){
                        //Create Oscillator, set up frequency
                        var osc = Pizzicato.context.createOscillator();
                        osc.frequency.value = patch.data.filterOSC_speed;

                        //Create Gain Node, set up value
                        var oscGain = Pizzicato.context.createGain();
                        oscGain.gain.value = 500;

                        //Connect OSC -> gain -> filter frequency
                        osc.connect(oscGain);
                        oscGain.connect(patch.effects.filter.hp.filterNode.frequency);
                        osc.start();
                    }
                }
            }
        }
    },
    sound: {},
    create: function(){
        patch.resetData();
        patch.sound = new Pizzicato.Sound({
            source: 'file',
            options: {
                path: patch.data.file,
                attack: patch.data.attack + 0.04,
                volume: patch.data.volume,
                loop: true
            }
        }, function() {
            //console.log(patch.sound);
        });
    },
    resetData: function(){
        for (var property in patch.data) {
            patch.data[property] = default_data[property];
        }
    },
    updateData: function(){
        //Volume Envelope
        patch.sound.volume = 1;
        patch.sound.attack = patch.data.attack;
        patch.sound.release = patch.data.release;

        //Tremolo
        patch.effects.tremolo.speed = patch.data.tremolo_speed;
        patch.effects.tremolo.depth = patch.data.tremolo_depth;

        //Filter
        if(patch.data.filter_type != 'noFilter'){
            patch.effects.filter[patch.data.filter_type].frequency = patch.data.filter_cutoff;       
        }

    },
    play: function(){
        patch.updateData();
        patch.sound.play();
        patch.effects.vibrato.set();
        //Detune must be called right after playing, or the node won't exist
        patch.sound.sourceNode.detune.value = patch.data.detune;
    },
    stop: function(){
        patch.sound.stop();
    }
}

var patches = {
    init: function(){
        patch.create();
    }
}















