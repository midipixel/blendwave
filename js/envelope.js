/* Envelope Panel: Enable and Tweak Volume and Pitch Envelopes */

var envelope = {
    init: function(){
        // Slider Input Behaviour
        $('.envelope input[type=range]').on('input', function(e){
            //Update UI
            output = $(e.target).next('output');
            $(output)[0].value = e.target.value;

            //Update Parameter
            param = parseFloat(e.target.value);
            envelope.updateParameter(e.target,param);
        });
    },
    panel: function(){
        console.log("Envelope Panel Loaded")
    },
    updateParameter: function(target, value){
        parameter = target.id;

        switch(parameter){
            case 'amp_attack':
                //Attack needs a little offset to prevent buggy behaviour
                patch.sound.attack = value + 0.04;
            break;

            case 'amp_release':
                patch.sound.release = value;
            break;

            case 'pitch_ammount':
                patch.data.rate = value;
            break;
        }
    }
}