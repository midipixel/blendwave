var envelope = {
    init: function(){
        console.log('Envelope Panel Loaded');
        main.updateFile();

        $('.amp input[type=range]').on('input', function(e){
            output = $(e.target).next('output');
            $(output)[0].value = e.target.value;
            envelope.updateParameter(e.target, e.target.value);
        });

        $('#more').on('click', function(){
            wave.sound.attack +=0.2;
        });

        $('#less').on('click', function(){
            wave.sound.attack -=0.1;
        });
    },
    updateParameter: function(target, value){
        parameter = target.id;

        switch(parameter){
            case 'amp_attack':
                wave.sound.attack = value;
            break;
        }
    }
}