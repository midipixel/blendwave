var patch = {
    data: {
        file: 'samples/sine.wav',
        attack: 0.04,
        release: 0,
        detune: 0,
    },
    sound: {},
    create: function(patchIndex){
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
    }
}



