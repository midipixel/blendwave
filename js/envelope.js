var envelope = {
    init: function(){
        main.updateFile();

        $('#more').on('click', function(){
            wave.sound.attack +=0.2;
        });

        $('#less').on('click', function(){
            wave.sound.attack -=0.1;
        });
    }
}