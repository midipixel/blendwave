var fx = {
    init: function(){

    }
}

var customFX = {
    pitchOSC: {
        t: 0,
        min: 1,
        max: 4,
        freqMultiplier: 1,
        dt: 0.03 / Math.sqrt(freqMultiplier),
        interval,

        oscillate: function(){
            this.t = this.t + this.dt;
            var osc = min + ((1 + Math.sin(t*freqMultiplier))/2)*(max-min);
            patch.sound.sourceNode.playbackRate.value = osc;
            console.log(dt);
        },

        start: function(){
            this.interval = window.setInterval(oscillate, dt * 1000);
        }
    }
}

