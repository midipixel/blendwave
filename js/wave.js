var wave = {
    file: 'sine.wav',
    sound: new Pizzicato.Sound('samples/sine.wav'),
    init: function(){
        console.log('Wave Panel Loaded');

        //File List
        $('#fileList a').on('click', function(e){
            e.preventDefault();
            wave.file = this.href;

            //Set visual styles
            $('#fileList li').removeClass();
            $(this).parent().addClass('active');

            //On Change
            wave.changeFile(wave.file);
        });

        //File Loader
        $('#wavefile').on('change', function(){
            var file = this.files[0];
            console.log(file);
        });
    },
    changeFile: function(waveFile){
        file = waveFile || wave.file;

        wave.sound.stop();

        wave.sound = new Pizzicato.Sound({
            source: 'file',
            options: { path: file, attack: 0.2 }
        }, function() {
            wave.sound.play();
        });

        main.updateFile(wave.file);
    }
}

