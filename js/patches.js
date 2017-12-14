var patch = {
    sound: {},
    updateData: function(){
        //Envelope
        bw.$refs.envelopePanel.prePlayUpdate();

        //Filter
        bw.$refs.filterPanel.prePlayUpdate();

        //Effects
        bw.$refs.fxPanel.prePlayUpdate();

        //Mixer
        bw.$refs.exportPanel.prePlayUpdate();
    },
    play: function(){
        this.updateData();
        this.sound.play();
        //Methods that must be invoked right after playing, or the node won't exist
        bw.$refs.envelopePanel.postPlayUpdate();
        bw.$refs.filterPanel.postPlayUpdate();
    },
    stop: function(){
        // If the amp envelope is disabled, there is no need to stop the playback
        if (bw.$refs.envelopePanel.amp_envelope.active){
            patch.sound.stop();
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
