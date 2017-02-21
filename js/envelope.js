/* Envelope Panel: Enable and Tweak Volume and Pitch Envelopes */

var envelope = {
    onload: function(){
        console.log("Envelope Panel Loaded");
    },
    init: function(){

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

            case 'tremolo_speed':
                patch.data.tremolo_speed = value;
            break;

            case 'tremolo_depth':
                patch.data.tremolo_depth = value;
            break;

            case 'vibrato_speed':
                patch.data.vibrato_speed = value;
            break;
        }
    }
}