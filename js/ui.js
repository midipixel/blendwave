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
            //Stop audio on spacebar press
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
    },
    reset: function(){
        bw.$refs.envelopePanel.resetDefaults();
        //Reset Sliders
        setSlider(filter_cutoff, default_data.filter_cutoff);
        setSlider(filterOSC_speed, default_data.filterOSC_speed);
        setSlider(filterOSC_depth, default_data.filterOSC_depth);

        //Reset Filter UI
        setComboOption('filter', default_data.filter_type);
        disableUI(filterParams);
        disableUI(filter_osc);
        $('.filterType p').html('');
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
