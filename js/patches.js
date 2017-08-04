var default_data = {
    filter_type: 'noFilter',
    filter_cutoff: 500,
    filterOSC_speed: 1,
    filterOSC_depth: 0,
}

var patch = {
    file: 'samples/sine.wav',
    data: {
        filter_type: '',
        filter_cutoff: 0,
        filterOSC_speed: 0,
        filterOSC_depth: 0,
    },
    effects: {
        filter: {
            lp : new Pizzicato.Effects.LowPassFilter({
                frequency: default_data.filter_cutoff,
                mix: 0
            }),
            hp : new Pizzicato.Effects.HighPassFilter({
                frequency: default_data.filter_cutoff,
                mix: 0
            }),
            osc: {
                on: false,
                oscNode: {},
                gainNode: Pizzicato.context.createGain(),
                set: function(){
                    if(patch.data.filter_type != 'noFilter'){                    
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
                            var gainValue = patch.data.filterOSC_depth;
                            oscGain.gain.value = gainValue;
                        }
                        else {
                            oscGain.gain.value = 0;                        
                        }
                    }
                }
            }
        }
    },
    sound: {},
    create: function(){
        patch.resetData();
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
    resetData: function(){
        for (var property in patch.data) {
            patch.data[property] = default_data[property];
        }
    },
    updateData: function(){
        //Envelope
        bw.$refs.envelopePanel.prePlayUpdate();

        //Filter
        if(patch.data.filter_type != 'noFilter'){
            patch.effects.filter[patch.data.filter_type].frequency = patch.data.filter_cutoff;       
        }

        //Effects
        bw.$refs.fxPanel.prePlayUpdate();
    },
    play: function(){
        patch.updateData();
        patch.sound.play();
        //Methods that must be invoked right after playing, or the node won't exist
        bw.$refs.envelopePanel.setPitchOSC();
        bw.$refs.envelopePanel.postPlayUpdate();
    },
    stop: function(){
        // If the amp envelope is disabled, there is no need to stop the playback
        if (bw.$refs.envelopePanel.amp_envelope.active){
            patch.sound.stop();
        }

        //Disconnect useless filter oscillator from gain node, after release time
        if(patch.data.filter_type != 'noFilter'){
            var timeOut = patch.data.release * 1000;
            window.setTimeout(function(){
                patch.effects.filter.osc.oscNode.disconnect();        
            }, timeOut);
        }
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
















