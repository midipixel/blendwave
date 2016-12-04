var patch = {
    data: {
        file: 'samples/sine.wav',
        attack: 0.04,
        release: 0.04,
        detune: 0
    },
    effects: {
        tremolo: {
            params: {
                speed: 5,
                depth: 1,
                mix: 0
            },
            fx: false
        }
    },
    sound: {},
    create: function(){
        patch.sound = new Pizzicato.Sound({
            source: 'file',
            options: {
                path: patch.data.file,
                attack: patch.data.attack,
                volume: patch.data.volume
            }
        }, function() {

            console.log(patch.sound);
        });
    },
    play: function(){
        function applyProcessing(){
            patch.sound.attack = patch.data.attack;
            patch.sound.release = patch.data.release;
            patch.sound.volume = 1;

            //Remove currently applied tremolo if it exists
            if(patch.effects.tremolo.fx){
                patch.sound.removeEffect(patch.effects.tremolo.fx);
            }

            //Create new tremolo with updated params
            patch.effects.tremolo.fx = new Pizzicato.Effects.Tremolo(patch.effects.tremolo.params);
            patch.sound.addEffect(patch.effects.tremolo.fx);
        }

        applyProcessing();
        patch.sound.play();
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












