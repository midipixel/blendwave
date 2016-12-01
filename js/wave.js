/* Wave Panel: Sound File Loader */

var wave = {
    config: {
        rate: 1
    },
    file: 'sine.wav',
    sound: new Pizzicato.Sound('samples/sine.wav'),
    init: function(){
        //File List
        $('#fileList a').on('click', function(e){
            e.preventDefault();
            wave.file = this.href;

            //Set visual styles
            $('#fileList li').removeClass();
            $(this).parent().addClass('active');

            //Load new file
            wave.changeFile(wave.file);
        });
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
        file = waveFile || wave.file;

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
        wave.sound.sourceNode.playbackRate.value = wave.config.rate;
        console.log(wave.sound.sourceNode.playbackRate.value);
        wave.sound.play();
    }
}

