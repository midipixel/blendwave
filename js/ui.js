/* Global UI */

var ui = {
    init: function(){
        //Global File Play Input
        $('.fileHeader').on('mousedown', function(){
            ui.fileHeader.setState('active');
            patch.play();
        })

        $('.fileHeader').on('mouseup', function(){
            ui.fileHeader.setState('default');
            patch.stop();
        })

        $('body').on('keydown', function(e){
            //Play audio on spacebar press
            if(e.keyCode == 32){
                patch.play();
            }
        });

        $('body').on('keyup', function(e){
            //Play audio on spacebar press
            if(e.keyCode == 32){
                patch.stop();
            }
        });

        // Audio Parameter Slider
        $('input[data-type=audioParam]').on('input', function(e){
            //Update UI
            output = $(e.target).next('output');
            $(output)[0].value = e.target.value;

            //Update Parameter
            param = parseFloat(e.target.value);
            envelope.updateParameter(e.target,param);
        });

        // Amp Oscilator
        $('#ampOSC input[type=checkbox]').on('focus', function(e){
            if(e.target.checked){
                patch.effects.tremolo.params.mix = 1;
                $('#ampOSC').removeClass('disabled');
            }
            else{
                patch.effects.tremolo.params.mix = 0;
                $('#ampOSC').addClass('disabled');
            };
        });
    },
    fileHeader: {
        update: function(){
            $('.fileHeader span').html(patch.data.file);
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