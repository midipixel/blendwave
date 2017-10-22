var default_data = {
    filterOSC_speed: 1,
    filterOSC_depth: 0,
}

var patch = {
    file: 'samples/sine.wav',
    data: {
        filterOSC_speed: 0,
        filterOSC_depth: 0,
    },
    effects: {
        filter: {
            /*osc: {
                on: false,
                oscNode: null,
                gainNode: Pizzicato.context.createGain(),
                set: function(){
                    if(patch.data.filter_type != 'noFilter'){
                        //If there is already an oscillator, disconnect
                        if(patch.effects.filter.osc.oscNode){
                            patch.effects.filter.osc.oscNode.disconnect();
                        }

                        //Create Oscillator, set up frequency
                        patch.effects.filter.osc.oscNode = Pizzicato.context.createOscillator();
                        var osc = patch.effects.filter.osc.oscNode;
                        osc.frequency.value = patch.data.filterOSC_speed;

                        //Connect OSC -> gain -> filter frequency
                        var oscGain = patch.effects.filter.osc.gainNode;
                        osc.connect(oscGain);
                        oscGain.connect(patch.effects.filter[patch.data.filter_type].filterNode.frequency);
                        osc.start(); 

                        if (this.on){
                            oscGain.gain.value = patch.data.filterOSC_depth * 4000;
                        }
                        else {
                            oscGain.gain.value = 0;                        
                        }
                    }
                }
            }*/
        }
    },
    sound: {},
    create: function(){
        patch.sound = new Pizzicato.Sound({
            source: 'file',
            options: {
                path: patch.file,
                attack: 0.04,
                volume: 1,
                loop: true
            }
        }, function() {
            patch.analyser.create();
            //console.log(patch.sound);
        });
    },
    updateData: function(){
        //Envelope
        bw.$refs.envelopePanel.prePlayUpdate();

        //Filter
        bw.$refs.filterPanel.prePlayUpdate();

        //Effects
        bw.$refs.fxPanel.prePlayUpdate();
    },
    play: function(){
        patch.updateData();
        patch.sound.play();
        //Methods that must be invoked right after playing, or the node won't exist
        //patch.effects.filter.osc.set();
        bw.$refs.envelopePanel.postPlayUpdate();
        bw.$refs.filterPanel.postPlayUpdate();
    },
    stop: function(){
        // If the amp envelope is disabled, there is no need to stop the playback
        if (bw.$refs.envelopePanel.amp_envelope.active){
            patch.sound.stop();
        }

        //Disconnect useless filter oscillator from gain node, after release time
        /*if(patch.data.filter_type != 'noFilter' && patch.effects.filter.osc.on){
            var timeOut = patch.data.release * 1000;
            window.setTimeout(function(){
                patch.effects.filter.osc.oscNode.disconnect();        
            }, timeOut);
        }*/
    },
    analyser: {
        create: function(){
            //Create Analyser node and connect it to Pizzicato's master gain node
            this.node = Pizzicato.context.createAnalyser();
            this.node.fftSize = 32;
            Pizzicato.masterGainNode.connect(this.node);
        }
    }
}
















