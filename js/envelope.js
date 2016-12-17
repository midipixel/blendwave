/* Envelope Panel: Enable and Tweak Volume and Pitch Envelopes */

var envelope = {
    init: function(){

    },
    panel: function(){
        console.log("Envelope Panel Loaded");
    },
    updateParameter: function(target, value){
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

            case 'amp_osc_speed':
                patch.data.vol_lfo_speed = value;
            break;

            case 'amp_osc_depth':
                patch.data.vol_lfo_depth = value;
            break;

            case 'pitch_osc_speed':
                patch.effects.vibrato.speed = value;
            break;
        }
    }
}