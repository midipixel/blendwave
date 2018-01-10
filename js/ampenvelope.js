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
            //Apply release envelope
            var soundDuration = Pz.context.currentTime + patch.sound.sourceNode.buffer.duration;
            var envStart = soundDuration - 1.2;

            this.node.gain.setTargetAtTime(0, envStart, 0.5);
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
