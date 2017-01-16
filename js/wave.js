/* Wave Panel: Sound File Loader */

var wave = {
    init: function(){
        //Initialize File List
        $('#fileList a').on('click', function(e){
            e.preventDefault();

            //Set visual styles
            $('#fileList li').removeClass();
            $(this).parent().addClass('active');

            //Load new file
            wave.changeFile(this.href);
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
        patch.resetData();

        patch.data.file = waveFile;
        file = waveFile;

        patch.stop();

        patch.sound = new Pizzicato.Sound({
            source: 'file',
            options: { path: file }
        }, function() {
            patch.play();
        });

        ui.fileHeader.update();
        ui.reset();

        console.log(waveFile);
    }
}

