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
            updateParameter(e.target,param);
        });

        // Tremolo
        $('#tremolo input[type=checkbox]').on('change', function(e){
            if(e.target.checked){
                $('#tremolo').removeClass('disabled');
                $('#tremolo input[type="range"]').attr('disabled', false);
                patch.sound.addEffect(patch.effects.tremolo);
            }
            else{
                disableUI(tremolo);
                patch.sound.removeEffect(patch.effects.tremolo);
            };
        });
        // Vibrato
        $('#vibrato input[type=checkbox]').on('change', function(e){
            if(e.target.checked){
                $('#vibrato').removeClass('disabled');
                $('#vibrato input[type="range"]').attr('disabled', false);
                patch.effects.vibrato.mix = 1;
            }
            else{
                disableUI(vibrato);
                patch.effects.vibrato.mix = 0;
            };
        });

        // Filter
        $('select#filter').on('change', function(e){

            type = $('#filter option:selected').attr('id');

            //Remove applied filters, if any
            if(patch.data.filter_type != 'noFilter'){
                var appliedFilter = patch.data.filter_type;    
                patch.sound.removeEffect(patch.effects.filter[appliedFilter]);
            }

            //Apply selected filter
            if(type == 'hp'){
                patch.data.filter_type = 'hp';
                patch.sound.addEffect(patch.effects.filter.hp);              
                console.log(patch.data.filter_type);
            }else if(type == 'lp'){
                patch.data.filter_type = 'lp';
                patch.sound.addEffect(patch.effects.filter.lp);
                console.log(patch.data.filter_type);                
            }else{
                patch.data.filter_type = 'noFilter';
            }
        });

    },
    reset: function(){
        setSlider(amp_attack, default_data.attack);
        setSlider(amp_release, default_data.release);
        setSlider(pitch_ammount, default_data.detune);
        setSlider(tremolo_speed, default_data.tremolo_speed);
        setSlider(tremolo_depth, default_data.tremolo_speed);
        setSlider(vibrato_speed, default_data.vibrato_speed);
        setSlider(filter_cutoff, default_data.filter_cutoff);
        setSlider(filter_mix, default_data.filter_mix);
        setSlider(filterOSC_speed, default_data.filterOSC_speed);
        setSlider(filterOSC_depth, default_data.filterOSC_depth);

        //Disable Tremolo
        disableUI(tremolo);

        //Disable Vibrato
        disableUI(vibrato);
        patch.effects.vibrato.mix = 0;
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

function updateParameter(target, value){
    parameter = target.id;

    switch(parameter){
        case 'amp_attack':
            //Attack needs a little offset to prevent buggy behaviour
            patch.data.attack = value + 0.04;
        break;

        case 'amp_release':
            patch.data.release = value;
        break;

        case 'pitch_ammount':
            //Multiply by 100 because values are shown in semitones in the UI
            patch.data.detune = value * 100;
        break;

        case 'tremolo_speed':
            patch.data.tremolo_speed = value;
        break;

        case 'tremolo_depth':
            patch.data.tremolo_depth = value;
        break;

        case 'vibrato_speed':
            patch.data.vibrato_speed = value;
        break;

        case 'filter_cutoff':
            patch.data.filter_cutoff = value;
        break;

        case 'filter_mix':
            patch.data.filter_mix = value;
        break;                
    }
}

function setSlider(parameter, value){
    $(parameter).val(value);
    $(parameter).next('output').val(value);
}

function disableUI(parameter){
    $(parameter).addClass('disabled');
    $(parameter).find('input[type="range"]').attr('disabled', true);
    $(parameter).find('input[type="checkbox"]').prop('checked', false);
}
