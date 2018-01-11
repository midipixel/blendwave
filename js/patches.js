var patch = {
    sound: {},
    prePlayUpdate: function(){
        //Envelope
        bw.$refs.envelopePanel.prePlayUpdate();
        ampEnvelope.prePlayUpdate();

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
        //ampEnvelope.release.postPlayUpdate();
    },
    play: function(){
        this.sound.stop();
        this.prePlayUpdate();
        this.sound.play(0, bw.$refs.wavePanel.offset);
        this.postPlayUpdate();
    },
    stop: function(){
        var releaseActive = bw.$refs.envelopePanel.amp_envelope.active;

        // Apply release if active
        if (releaseActive){
            ampEnvelope.release.applyEnvelope();
        }
    },
    analyser: {
        create: function(){
            //Create Analyser node and connect it to Pizzicato's master gain node
            this.node = Pizzicato.context.createAnalyser();
            this.node.fftSize = 32;
            Pizzicato.masterGainNode.connect(this.node);
        }
    },
    logNodes: function(){
        console.log('Fade: ' + patch.sound.fadeNode.__resource_id__);
        console.log('Attack: ' + ampEnvelope.attack.node.__resource_id__);
        console.log('Release: ' + ampEnvelope.release.node.__resource_id__);
        console.log('Master Volume: ' + patch.sound.masterVolume.__resource_id__);
        for(node in nodeHistory){
            if (node != 'log' && nodeHistory[node] != null)
            console.log(node + ' ' + nodeHistory[node].__resource_id__);
        }
    },
    ps: function(){
        this.sound.play();
        window.setTimeout(function(){
            patch.sound.stop();
        }, 1000);
    },
}
