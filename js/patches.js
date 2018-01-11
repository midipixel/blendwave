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

        //Release Node
        ampEnvelope.release.prePlayUpdate();

    },
    postPlayUpdate: function(){
        //Methods that must be invoked right after playing, or the node won't exist
        bw.$refs.envelopePanel.postPlayUpdate();
        bw.$refs.filterPanel.postPlayUpdate();
        ampEnvelope.release.postPlayUpdate();
    },
    play: function(){
        //this.logNodes();
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
                //console.log(patch.sound.sourceNode.buffer.duration);
                ampEnvelope.release.applyEnvelope();
                //patch.sound.stop();
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
    },
    logNodes: function(){
        console.log('Fade: ' + patch.sound.fadeNode.__resource_id__);
        console.log('Release: ' + ampEnvelope.release.node.__resource_id__);
        console.log('Master Volume: ' + patch.sound.masterVolume.__resource_id__);
    },
    ps: function(){
        this.sound.play();
        window.setTimeout(function(){
            patch.sound.stop();
        }, 1000);
    },
}
