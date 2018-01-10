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
        ampEnvelope.release.applyEnvelope();

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
    },
    releaseNode: {
        create: function(){
            this.node = Pizzicato.context.createGain();
            this.node.gain.value = 1;
        },
        prePlayUpdate: function(){
            //Reset envelope values
            this.node.gain.cancelScheduledValues(Pz.context.currentTime);
            this.node.gain.setValueAtTime(1, Pz.context.currentTime);

            //Disconnect releaseNode from useless old nodes
            if(patch.nodeHistory.log > 0){
                patch.nodeHistory.oldFade.disconnect(this.node);
                this.node.disconnect(patch.nodeHistory.oldMasterVolume);
            }
        },
        postPlayUpdate: function(){
            //Update node history
            patch.nodeHistory.oldFade = patch.sound.fadeNode;
            patch.nodeHistory.oldMasterVolume = patch.sound.masterVolume;
            patch.nodeHistory.log++;

            //Insert releaseNode at the correct place in the graph
            patch.sound.fadeNode.disconnect(patch.sound.masterVolume);
            patch.sound.fadeNode.connect(this.node);
            this.node.connect(patch.sound.masterVolume);
        },
        applyEnvelope: function(){
            //Apply release envelope
            var soundDuration = Pz.context.currentTime + patch.sound.sourceNode.buffer.duration;
            var envStart = soundDuration - 1.2;

            this.node.gain.setTargetAtTime(0, envStart, 0.5);
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
