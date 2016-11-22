var wave = {
    file: '',
    sampler: {},
    init: function(){
        console.log('Wave Panel Loaded');

        //File List
        $('#fileList a').on('click', function(e){
            e.preventDefault();
            wave.file = this.href;

            //Set visual styles
            $('#fileList li').removeClass();
            $(this).parent().addClass('active');

            //Play file
            wave.changeFile(wave.file);
        });

        //File Loader
        $('#wavefile').on('change', function(){
            var file = this.files[0];
            console.log(file);
        });
    },
    changeFile: function(waveFile){
        wave.playFile(wave.file);
        $('.fileHeader span').html(wave.file);
    },
    playFile: function(waveFile){
        wave.sampler = new Tone.Sampler(waveFile, function(){
            wave.sampler.triggerAttack();
        }).toMaster();

    }
}

