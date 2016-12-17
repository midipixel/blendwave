var patch = {
    data: {
        file: 'samples/sine.wav',
        attack: 0.04,
        release: 0.04,
        detune: 1,
        vol_lfo_speed: 5,
        vol_lfo_depth: 1
    },
    effects: {
        tremolo: new Pizzicato.Effects.Tremolo({
            speed: 0,
            depth: 0,
            mix: 1
        }),
        vibrato: {
            mix: 0,
            speed: 0,
            set: function(){
                var osc = Pizzicato.context.createOscillator();
                osc.frequency.value = this.speed;
                osc.connect(patch.sound.sourceNode.playbackRate);

                //Start the oscillator if the effect is enabled 
                if (this.mix != 0){
                    osc.start();
                }

            }
        }
    },
    sound: {},
    create: function(){
        patch.sound = new Pizzicato.Sound({
            source: 'file',
            options: {
                path: patch.data.file,
                attack: patch.data.attack,
                volume: patch.data.volume,
                loop: true
            }
        }, function() {
            //console.log(patch.sound);
        });
    },
    updateData: function(){
        //Volume Envelope
        patch.sound.volume = 1;
        patch.sound.attack = patch.data.attack;
        patch.sound.release = patch.data.release;

        //Volume LFO
        patch.effects.tremolo.speed = patch.data.vol_lfo_speed;
        patch.effects.tremolo.depth = patch.data.vol_lfo_depth;
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

function po(){
    var osc = Pizzicato.context.createOscillator();
    osc.frequency.value = 10;
    //console.log(patch.sound.sourceNode.playbackRate.value);
    osc.connect(patch.sound.sourceNode.playbackRate);
    osc.start();
}














