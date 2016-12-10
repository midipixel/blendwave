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
        })
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
        //Detune must be called right after playing, or the node won't exist
        patch.sound.sourceNode.detune.value = patch.data.detune;
        pitchOSC();
    },
    stop: function(){
        patch.sound.stop();
        patch.sound.sourceNode.onended = function(){
            window.clearInterval(interval);
        }
    }
}

var patches = {
    init: function(){
        patch.create();
    }
}

var t = 0;
var min = 1;
var max = 4;
var freqMultiplier = 1;
var dt = 0.03 / Math.sqrt(freqMultiplier);
var interval;

function oscillate(){
    t = t + dt;
    osc = min + ((1 + Math.sin(t*freqMultiplier))/2)*(max-min);
    patch.sound.sourceNode.playbackRate.value = osc;
    console.log(dt);
}

function pitchOSC(){
    interval = window.setInterval(oscillate, dt * 1000);
}














