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
                enableUI(tremolo);
                patch.sound.addEffect(patch.effects.tremolo);
            }
            else{
                disableUI(tremolo);
                patch.sound.removeEffect(patch.effects.tremolo);
            };
        });
        // Vibrato
        $('#vibrato input[type=checkbox]').on('change', function(e){
            toggleOSC(e.target, 'vibrato');
        });

        //Filter Type
        $('select#filter').on('change', function(){
            type = $('#filter option:selected').attr('id');

            //Remove applied filters, if any
            if(patch.data.filter_type != 'noFilter'){
                var appliedFilter = patch.data.filter_type;    
                patch.sound.removeEffect(patch.effects.filter[appliedFilter]);
            }
            //Apply the correct filter
            applyFilter(type);
        });

        // Filter Oscillator
        $('#filter_osc input[type=checkbox]').on('change', function(e){
            toggleOSC(e.target, 'filter_osc');
        }); 

        //FX Type
        $('#fxSelect').on('change', function(){
            type = $('#fxSelect option:selected').val();

            $('.fxSetup').hide();
            $('#' + type).css('display', 'flex');

        });               
    },
    reset: function(){
        //Reset Sliders        
        setSlider(amp_attack, default_data.attack);
        setSlider(amp_release, default_data.release);
        setSlider(pitch_ammount, default_data.detune);
        setSlider(tremolo_speed, default_data.tremolo_speed);
        setSlider(tremolo_depth, default_data.tremolo_speed);
        setSlider(vibrato_speed, default_data.vibrato_speed);
        setSlider(filter_cutoff, default_data.filter_cutoff);
        setSlider(filterOSC_speed, default_data.filterOSC_speed);
        setSlider(filterOSC_depth, default_data.filterOSC_depth);

        //Reset Filter UI
        setComboOption('filter', default_data.filter_type);
        disableUI(filterParams);
        disableUI(filter_osc);
        $('.filterType p').html('');             

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

        case 'filterOSC_speed':
            patch.data.filterOSC_speed = value;
        break;   

        case 'filterOSC_depth':
            patch.data.filterOSC_depth = value;
        break;                      
    }
}

function setSlider(parameter, value){
    $(parameter).val(value);
    $(parameter).next('output').val(value);
}

function setComboOption(parameter, value){
    var domquery = 'select#' + parameter + '>' + '#' + value;
    $(domquery).prop({selected: true});
}

function disableUI(parameter){
    $(parameter).addClass('disabled');
    $(parameter).find('input[type="range"]').attr('disabled', true);
    $(parameter).find('input[type="checkbox"]').prop('checked', false);
}

function enableUI(parameter){
    $(parameter).removeClass('disabled').attr('disabled', false);
    $(parameter).find('input[type="range"]').attr('disabled', false);
}

function applyFilter(filterType) {
    patch.data.filter_type = filterType;

    if(filterType != "noFilter"){
        var filterValues;

        //Change UI values according to the filter type
        if(filterType == "lp"){
            filterValues = {
                min: 20,
                max: 2000,
                step: 10,
                value: 100,
            }  
            $('.filterType p').html('Filtra as altas frequências');
        }else if(filterType == "hp"){
            filterValues = {
                min: 0,
                max: 5000,
                step: 10,
                value: 500,
            }                
            $('.filterType p').html('Filtra as baixas frequências');            
        }
        //Enable UI, since there is a filter type
        enableUI(filterParams);

        //Update cutoff slider values
        $('#filter_cutoff').attr(filterValues).val(filterValues.value);           

        //Update patch data
        patch.data.filter_cutoff = filterValues.value;       

        //Show correct image
        $('.filterSetup img').attr('src', 'img/filter_' + filterType + '.png');
        $('.filterSetup img').show();

        //Apply Filter
        patch.sound.addEffect(patch.effects.filter[filterType]);        
    }else{
        disableUI(filterParams);
        $('.filterType p').html('');     
    }

    //Update UI
    $("#filter_cutoff").next('output').val(patch.data.filter_cutoff);
}

function toggleOSC(checkbox, oscType){
    //Convert oscType string to a usable path format
    var oscPath = oscType.replace('_','.');
    var osc = eval('patch.effects.' + oscPath);

    if(checkbox.checked){
        enableUI('#' + oscType);
        osc.on = true;
    }
    else{
        disableUI('#' + oscType);
        osc.on = false;
    };

    console.log(osc);
}
