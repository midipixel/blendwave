/* Wave Panel: Sound File Loader */

var wave = {
    data: {
        file: 'samples/sine.wav',
        attack: 0.04,
        release: 0,
        detune: 0,
    },
    file: 'samples/sine.wav',
    sound: ' ',
    createSound: function(){
        wave.sound = new Pizzicato.Sound({
            source: 'file',
            options: { path: wave.data.file, attack: wave.data.attack, volume: wave.data.volume }
        }, function() {
            console.log(wave.sound);
        });
    },
    init: function(){
        //Initialize File List
        $('#fileList a').on('click', function(e){
            e.preventDefault();
            wave.file = this.href;

            //Set visual styles
            $('#fileList li').removeClass();
            $(this).parent().addClass('active');

            //Load new file
            wave.changeFile(wave.file);
        });

        //Create Sound Object
        wave.createSound();
    },
    panel: function(){
        console.log('Wave Panel Loaded');

        //File Loader
        $('#wavefile').on('change', function(){
            var file = this.files[0];
        });
    },
    changeFile: function(waveFile){
        console.log(waveFile);
        file = waveFile || wave.data.file;

        wave.sound.stop();

        wave.sound = new Pizzicato.Sound({
            source: 'file',
            options: { path: file, attack: 0.04 }
        }, function() {
            wave.sound.play();
        });

        ui.fileHeader.update();
    },
    play: function(){
        //For some reason, I must play the sound to have access to its current sourceNode properties
        wave.sound.volume = 1;
        wave.sound.play();
        wave.sound.sourceNode.detune.value = wave.data.detune;
    }
}

