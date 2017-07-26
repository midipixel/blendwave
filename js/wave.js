/* Wave Panel: Sound File Loader */

var wave = {
    onload: function(){
        console.log('Wave Panel Loaded');

        //File Loader
        $('#wavefile').on('change', function(){
            var file = this.files[0];
        });
    },
    init: function(){
        //Initialize File List
        $('#fileList a').on('click', function(e){
            e.preventDefault();

            //Set visual styles
            $('#fileList li').removeClass();
            $(this).parent().addClass('active');

            //Load new file
            wave.changeFile(this, this.href);
        });
    },
    changeFile: function(selected, waveFile){
        //Input loading text
        $(selected).append('<span id="loadText" class="loadText">(loading...)</span>');

        //Update Patch
        patch.resetData();
        patch.data.file = waveFile;
        file = waveFile;
        bw.$refs.fxPanel.resetFX();

        patch.stop();

        patch.sound = new Pizzicato.Sound({
            source: 'file',
            options: { path: file }
        }, function() {
            $('#loadText').remove();
            patch.play();
        });

        ui.fileHeader.update();
        ui.reset();

        console.log(waveFile);
    }
}

