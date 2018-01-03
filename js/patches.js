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
        var attackActive = bw.$refs.envelopePanel.amp_envelope.params.attack.value != bw.$refs.envelopePanel.amp_envelope.params.attack.default;

        if(attackActive){
            this.playWithAttack();
        }
        else{
            this.sound.stop();
            this.prePlayUpdate();
            this.sound.play(0, bw.$refs.wavePanel.offset);
            this.postPlayUpdate();
        }
    },
    playWithAttack: function(){
        var self = this;
        //If attack is being used, a new Pizzicato Object must be created everytime the sound plays
        this.sound = new Pizzicato.Sound(bw.$root.file.path, function() {
            self.prePlayUpdate();
            self.sound.play(0, bw.$refs.wavePanel.offset);
            self.postPlayUpdate();
        });
    },
    stop: function(){
        var attackActive = bw.$refs.envelopePanel.amp_envelope.params.attack.value != bw.$refs.envelopePanel.amp_envelope.params.attack.default;
        var releaseActive = bw.$refs.envelopePanel.amp_envelope.active;

        function stopWithAttack(){
            this.sound.stop();
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
