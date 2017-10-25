Vue.component('exportpanel', {
    props: ['active'],
    template: '#exportPanel',
    data: function(){
        return {
            content: content.exportPanel,
            interval: null
        }
    },
    methods: {
        exportFile: function(){
            //Create Recorder object, connected to the sound's output node
            var recorder = new Recorder(patch.sound.masterVolume);

            //Turns recorder on, plays the sound
            recorder.record();
            patch.play();
            patch.stop();

            //Start listening for the sound's end
            if (bw.$refs.envelopePanel.amp_envelope.active){
            // Envelope is active? Wait for the ondended callback, then detect silence
                patch.sound.sourceNode.onended = function(){
                    exportWhenMute();
                }
            }
            else{
            // No envelope? Just detect silence and export
                exportWhenMute();
            }

            // Analyses frequencies at a set interval. When no frequency is present, create the download link
            function exportWhenMute(){
                var verifyCounter = 0;
                var verifications = 1;
                var bufferLength = 4;
                var dataArray = new Uint8Array(bufferLength);

                // If delays are applied, increment the verifyCounter to account for the longest
                var fxSlots = bw.$refs.fxPanel.fxSlots;
                var delayTimes = [0];

                for (slot in fxSlots){
                    if (fxSlots[slot].selected == "delay"){
                        delayTimes.push(fxSlots[slot].params.time);
                        var longestDelay = Math.max.apply(null, delayTimes);
                        verifications = longestDelay * 60;
                    }
                }

                function verifyMute(){
                    patch.analyser.node.getByteFrequencyData(dataArray);
                    //console.log(dataArray);

                    if (dataArray[0] < 1){
                        if (verifyCounter > verifications){
                            // When output is verified mute after some checks,
                            //clears the interval and creates download link
                            clearInterval(this.interval);
                            createDownloadLink();
                        }
                        else {
                            verifyCounter++;
                        }
                    }
                }
                //Start verification
                this.interval = setInterval(verifyMute,30);
            };

            //Download link creation
            function createDownloadLink() {
                recorder && recorder.exportWAV(function(blob) {
                    var url = URL.createObjectURL(blob);
                    var li = document.createElement('li');
                    var au = document.createElement('audio');
                    var hf = document.createElement('a');

                    au.controls = true;
                    au.src = url;
                    hf.href = url;
                    hf.download = bw.$refs.wavePanel.fileName + '_' + new Date().toISOString() + '.wav';
                    //hf.download = new Date().toISOString() + '.wav';
                    //hf.innerHTML = hf.download;
                    var downloadText = 'Baixar: ' + bw.file.name;
                    hf.innerHTML = downloadText;
                    li.appendChild(au);
                    li.appendChild(hf);
                    recordingslist.appendChild(li);
                });
                //Stop must be called to account for the envelope off situation
                patch.sound.stop();
            }
        }
    }
});
