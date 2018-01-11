var ampEnvelope = {
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
            if(nodeHistory.log > 0){
                nodeHistory.oldFade.disconnect(this.node);
                this.node.disconnect(nodeHistory.oldMasterVolume);
            }
        },
        postPlayUpdate: function(){
            //Update node history
            nodeHistory.oldFade = patch.sound.fadeNode;
            nodeHistory.oldMasterVolume = patch.sound.masterVolume;
            nodeHistory.log++;

            //Insert releaseNode at the correct place in the graph
            patch.sound.fadeNode.disconnect(patch.sound.masterVolume);
            patch.sound.fadeNode.connect(this.node);
            this.node.connect(patch.sound.masterVolume);
        },
        applyEnvelope: function(){
            var sampleDuration = patch.sound.sourceNode.buffer.duration;
            var soundDuration;

            if(bw.$refs.envelopePanel.pitch.active){
                //Calculate time multiplier based on the number of semitones
                var pitchMultiplier = Math.pow(1.059, -bw.$refs.envelopePanel.pitch.params.amount.value);
                var pitchedDuration = sampleDuration * pitchMultiplier;
                console.log('pitched duration ' + pitchedDuration);
                soundDuration = Pz.context.currentTime + pitchedDuration;
            }
            else{
                soundDuration = Pz.context.currentTime + sampleDuration;
            }

            var envStart = soundDuration - this.value;
            var timeConstant = parseFloat(this.value/3).toFixed(2);

            console.log('envstart ' + envStart);
            console.log('duration ' + soundDuration);
            //console.log('timeconstant ' + timeConstant);

            this.node.gain.setTargetAtTime(0, envStart, timeConstant);
        },
        bla: function(){
            var sampleDuration = patch.sound.sourceNode.buffer.duration;
            if(bw.$refs.envelopePanel.pitch.active){
                //Calculate time multiplier based on the number of semitones
                var pitchMultiplier = Math.pow(1.059, -bw.$refs.envelopePanel.pitch.params.amount.value);
                var pitchedDuration = sampleDuration * pitchMultiplier;
                console.log('pitch multiplier ' + pitchMultiplier);
                console.log('sample duration ' + sampleDuration);
                console.log('pitched duration ' + pitchedDuration);
            }
        }
    },
    create: function(){
        this.release.node = Pizzicato.context.createGain();
        this.release.node.gain.value = 1;
    }
}

var nodeHistory = {
    log: 0,
    oldFade: null,
    oldMasterVolume: null
}
