var envelope = {
    init: function(){
        main.updateFile();
    },
    ampEnv: new Tone.AmplitudeEnvelope({
        "attack": 1,
        "decay": 0.2,
        "sustain": 1.0,
        "release": 0.8
    })
}