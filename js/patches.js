var patch = {
    sound: {},
    prePlayUpdate: function(){
        //Envelope
        bw.$refs.envelopePanel.prePlayUpdate();

        //Filter
        bw.$refs.filterPanel.prePlayUpdate();

        //Effects
        bw.$refs.fxPanel.prePlayUpdate();

        //Mixer
        bw.$refs.exportPanel.prePlayUpdate();
    },
    postPlayUpdate: function(){
        //Methods that must be invoked right after playing, or the node won't exist
        bw.$refs.envelopePanel.postPlayUpdate();
        bw.$refs.filterPanel.postPlayUpdate();
    },
    play: function(){
        this.sound.stop();
        this.prePlayUpdate();
        this.sound.play(0, bw.$refs.wavePanel.offset);
        this.postPlayUpdate();
    },
    stop: function(){
        var attackActive = bw.$refs.envelopePanel.amp_envelope.params.attack.value != bw.$refs.envelopePanel.amp_envelope.params.attack.default;
        var releaseActive = bw.$refs.envelopePanel.amp_envelope.active;

        function stopWithAttack(){
            patch.sound.stop();
        }

        // Playback only really needs to stop if there is a release envelope
        if (releaseActive){
            if(attackActive){
                var attack = bw.$refs.envelopePanel.amp_envelope.params.attack.value;
                var stopTimeout = window.setTimeout(stopWithAttack, attack * 1000);
            }
            else{
                patch.sound.stop();
            }
        }
        else{
            return;
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
