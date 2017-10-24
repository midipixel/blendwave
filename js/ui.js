/* Global UI */

var ui = {
    init: function(){
        //Global File Play Input
        $('.fileHeader').on('mousedown', function(){
            ui.fileHeader.setState('active');
            patch.play();
            //logValue.start();
        })

        $('.fileHeader').on('mouseup', function(){
            ui.fileHeader.setState('default');
            patch.stop();
            //logValue.stop();
        })

        $('body').on('keydown', function(e){
            //Play audio on 'P' press
            if(e.keyCode == 80){
                patch.play();
            }
        });

        $('body').on('keyup', function(e){
            //Stop audio on 'p' release
            if(e.keyCode == 80){
                patch.stop();
            }
        });
    },
    fileHeader: {
        update: function(){
            $('.fileHeader span').html(bw.$refs.wavePanel.fileName);
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


