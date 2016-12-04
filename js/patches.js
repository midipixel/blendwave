var patch = {
    data: {
        file: 'samples/sine.wav',
        attack: 0.04,
        release: 0,
        detune: 0,
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
        //For some reason, I must play the sound to have access to its current sourceNode properties
        patch.sound.volume = 1;
        patch.sound.play();
        patch.sound.sourceNode.detune.value = patch.data.detune;
    }
}

var patches = {
    init: function(){
        patch.create();
    }
}



