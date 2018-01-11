var ampEnvelope = {
    connected: false,
    attack: {
        value: 0
    },
    release: {
        value: 0,
        create: function(){
            this.node = Pizzicato.context.createGain();
            this.node.gain.value = 1;
        },
        prePlayUpdate: function(){
            //Reset envelope values
            this.node.gain.cancelScheduledValues(Pz.context.currentTime);
            this.node.gain.setValueAtTime(1, Pz.context.currentTime);

            //Disconnect releaseNode from useless old nodes
            ampEnvelope.disconnect();
            /*if(nodeHistory.log > 0){
                nodeHistory.oldFade.disconnect(this.node);
                this.node.disconnect(nodeHistory.oldMasterVolume);
            }*/
        },
        postPlayUpdate: function(){
            //Insert releaseNode at the correct place in the graph
            /*patch.sound.fadeNode.disconnect(patch.sound.masterVolume);
            patch.sound.fadeNode.connect(this.node);
            this.node.connect(patch.sound.masterVolume);*/
        },
        applyEnvelope: function(){
            var sampleDuration = patch.sound.sourceNode.buffer.duration - bw.$refs.wavePanel.offset;
            var soundDuration;

            if(bw.$refs.envelopePanel.pitch.active){
                //If the sound has been pitched, calculate duration based on the number of semitones
                var pitchMultiplier = Math.pow(1.059, -bw.$refs.envelopePanel.pitch.params.amount.value);
                var pitchedDuration = sampleDuration * pitchMultiplier;
                soundDuration = pitchedDuration;
            }
            else{
                soundDuration = sampleDuration;
            }

            //The max release duration must be the sound duration
            if(this.value > soundDuration){
                this.value = soundDuration;
            }

            var envStart = Pz.context.currentTime + soundDuration - this.value + 0.04;
            var timeConstant = parseFloat(this.value/3).toFixed(2);
            this.node.gain.setTargetAtTime(0, envStart, timeConstant);
        }
    },
    create: function(){
        this.release.node = Pizzicato.context.createGain();
        this.release.node.gain.value = 1;
    },
    connect: function(fromNode, toNode){
        //Update node history
        nodeHistory.oldFade = patch.sound.fadeNode;
        nodeHistory.oldFirstGain = fromNode;

        //Patch custom node graph into the Pizzicato graph
        fromNode.disconnect(toNode);
        fromNode.connect(this.release.node);
        this.release.node.connect(toNode);

        ampEnvelope.connected = true;
    },
    disconnect: function(){
        if(this.connected){
            nodeHistory.oldFirstGain.disconnect(this.release.node);
            this.release.node.disconnect(nodeHistory.oldFade);
        }
    }
}

var nodeHistory = {
    oldFade: null,
    oldMasterVolume: null,
    oldFirstGain: null
}
