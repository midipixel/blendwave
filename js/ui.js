/* Global UI */

var ui = {
    init: function(){
        //Global File Play Input
        $('.fileHeader').on('mousedown', function(){
            ui.fileHeader.setState('active');
            wave.play();
        })

        $('.fileHeader').on('mouseup', function(){
            ui.fileHeader.setState('default');
            wave.sound.stop();
        })

        $('body').on('keydown', function(e){
            //Play audio on spacebar press
            if(e.keyCode == 32){
                wave.sound.play();
            }
        });

        $('body').on('keyup', function(e){
            //Play audio on spacebar press
            if(e.keyCode == 32){
                wave.sound.stop();
            }
        });
    },
    fileHeader: {
        update: function(){
            $('.fileHeader span').html(wave.file);
        },
        setState: function(state){
            if (state === 'active'){
                $('.fileHeader').addClass('fileHeader_active');
            }
            else if(state === 'default'){
                $('.fileHeader').removeClass().addClass('fileHeader');
            }
        }
    }
}