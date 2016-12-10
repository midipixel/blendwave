/* Wave Panel: Sound File Loader */

var wave = {
    init: function(){
        //Initialize File List
        $('#fileList a').on('click', function(e){
            e.preventDefault();
            patch.data.file = this.href;

            //Set visual styles
            $('#fileList li').removeClass();
            $(this).parent().addClass('active');

            //Load new file
            wave.changeFile(patch.data.file);
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
        file = waveFile || patch.data.file;

        patch.sound.stop();

        patch.sound = new Pizzicato.Sound({
            source: 'file',
            options: { path: file, attack: patch.attack }
        }, function() {
            patch.play();
        });

        ui.fileHeader.update();
    }
}

