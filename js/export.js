Vue.component('exportpanel', {
    props: ['active'],
    template: '#exportPanel',
    data: function(){
        return {
            content: content.exportPanel,
            interval: null,
            exporting: false,
            emptyList: true,
            fileCounter: 0,
            mixer: {
                envelopePanel: {
                    active: true,
                    snapshot: {}
                },
                filterPanel: {
                    active: true,
                    snapshot: {}
                },
                fxPanel: {
                    active: true,
                    snapshot: {}
                },
                volume: {
                    value: 1,
                    min: 0,
                    max: 2,
                    step: 0.01,
                }
            }
        }
    },
    methods: {
        togglePanel: function(panel){
            // Flip booleans on local active values and general disabled values
            this.mixer[panel].active = !this.mixer[panel].active;
            bw.panels[panel].disabled = !this.mixer[panel].active;

            // Panel is being disabled
            if(!this.mixer[panel].active) {
                //Save snapshot
                this.mixer[panel].snapshot = bw.$refs[panel].getSnapshot;

                //Turn off relevant parameters
                switch(panel){
                    case 'envelopePanel':
                        // Turn every active envelope to false
                        for (param in this.mixer[panel].snapshot){
                            bw.$refs[panel][param].active = false;
                        }
                    break;

                    case 'filterPanel':
                        // Remove filter if applied
                        if(this.mixer[panel].snapshot.applied != null){
                            patch.sound.removeEffect(this.mixer[panel].snapshot.applied);
                        }
                    break;

                    case 'fxPanel':
                        // Turn every active effect to false
                        for (fxSlot in this.mixer[panel].snapshot){
                            bw.$refs[panel].fxSlots[fxSlot].active = false;
                        }
                    break;
                }
            }
            // Panel is being enabled
            else if(this.mixer[panel].active){
                // Restore parameters from snapshot
                switch(panel){
                    case 'envelopePanel':
                        for (param in this.mixer[panel].snapshot){
                            bw.$refs.envelopePanel[param].active = this.mixer[panel].snapshot[param];
                        }
                    break;

                    case 'filterPanel':
                        if(this.mixer[panel].snapshot.applied != null){
                            patch.sound.addEffect(this.mixer[panel].snapshot.applied);
                        }
                    break;

                    case 'fxPanel':
                        for (fxSlot in this.mixer[panel].snapshot){
                            bw.$refs[panel].fxSlots[fxSlot].active = this.mixer[panel].snapshot[fxSlot];
                        }
                    break;
                }
            }
        },
        exportFile: function(){
            var self = this;

            // Enter exporting state
            self.exporting = true;

            //Create Recorder object, connected to the sound's output node
            var recorder = new Recorder(Pizzicato.masterGainNode);

            //Turns recorder on, plays the sound
            patch.sound.stop();
            recorder.record();
            patch.play();

            //Start listening for the sound's end
            if (bw.$refs.envelopePanel.amp_envelope.active){
                //Stop won't trigger release without a small timer
                window.setTimeout(function(){
                    patch.stop();
                }, 20);

                // Wait for the ondended callback, then detect silence
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
                var verifications = 4;
                var bufferLength = 4;
                var timeoutCounter = 0;
                var dataArray = new Uint8Array(bufferLength);

                // If delays are applied, increment the verifyCounter to account for the longest
                var fxSlots = bw.$refs.fxPanel.fxSlots;
                var delayTimes = [0];

                for (slot in fxSlots){
                    if (fxSlots[slot].selected == "delay"){
                        // Get delay time and push it to an array
                        for (i in fxSlots[slot].fxData.delay.params){
                            if(fxSlots[slot].fxData.delay.params[i].id === "time"){
                                delayTimes.push(fxSlots[slot].fxData.delay.params[i].value);
                            }
                        }

                        // Get longest delay from array and add its multiplied time to the verification
                        var longestDelay = Math.max.apply(null, delayTimes);
                        verifications = longestDelay * 60;
                    }
                }

                // Terminates interval and creates the file
                function createFile(){
                    clearInterval(this.interval);
                    createDownloadLink();
                    self.exporting = false;
                }

                function verifyMute(){
                    patch.analyser.node.minDecibels = -80;
                    patch.analyser.node.getByteFrequencyData(dataArray);
                    //console.log(dataArray);

                    if (dataArray[1] < 1){
                        if (verifyCounter > verifications){
                            // When output is verified mute after some checks,
                            //clears the interval and creates download link
                            createFile();
                        }
                        else {
                            verifyCounter++;
                        }
                    }

                    /* Some sounds get stuck above zero at the analyser even if silent.
                    This is a safeguard to deal with this buggy behaviour. If the second position
                    gets stuck in a value below 50, wait for 6 seconds (200 * 30) and export anyway */

                    else if (dataArray[2] < 1 && dataArray[1] < 50) {
                        if (timeoutCounter > 200){
                            createFile();
                        }
                    }
                    timeoutCounter++;
                }

                //Start verification
                this.interval = setInterval(verifyMute,30);
            };

            //Download link creation
            function createDownloadLink() {
                recorder && recorder.exportWAV(function(blob) {
                    self.addFile(blob);
                });
            }
        },
        addFile: function(blob){
            self = this;

            var listItems = $('#recordingslist li');
            var fileName = bw.file + '_' + listItems.length + '.wav';
            var url = URL.createObjectURL(blob);

            //Wave Preview

            var wavesurfer = WaveSurfer.create({
                container: '#dlTemplate #fileWaveform',
                waveColor: '#d0d4de',
                progressColor: '#4b4f58',
                cursorColor: '#fff',
                cursorWidth: 0,
                height: 56
            });

            wavesurfer.load(url);

            //Replace cloned wavesurfer canvas with the original
            var linkId = 'link' + this.fileCounter;
            var template = $('#dlTemplate');
            var newLink = template.clone().attr('id', linkId).appendTo('#recordingslist');

            //Remove rendered wavesurfer from original target and insert into cloned node
            wsDestination = newLink.find('#fileWaveform');
            wsDestination.children().remove();
            $('#dlTemplate #fileWaveform').children().prependTo(wsDestination);

            //Audio Element
            newLink.find('audio').attr('src', url);

            //Download Button
            dwButton = newLink.find('[data-id="dwButton"]')[0];
            dwButton.href = url;
            dwButton.download = fileName;

            //File Header
            newLink.find('h5').html(fileName);

            //Remove Button
            newLink.find('[data-id="delButton"]').on('click', function(e){
                self.removeFile(e);
            });

            //Stop must be called to account for the envelope off situation
            patch.sound.stop();

            //File list no longer empty
            this.emptyList = false;

            this.fileCounter++;
        },
        createPreview: function(){

        },
        removeFile: function(e){
            var self = this;

            //Remove the list item
            fileNode = e.target.parentElement.parentElement;

            var removeAnim = anime({
                targets: fileNode,
                height: 0,
                paddingBottom: 0,
                opacity: 0,
                duration: 500,
                easing: 'easeOutSine',
                complete: function(){
                    afterRemoval();
                }
            });

            function afterRemoval(){
                $(fileNode).remove();

                //Check if the list is empty after exporting
                var exportedFiles = $('#recordingslist').children('li');

                if(exportedFiles.length < 1){
                    self.emptyList = true;
                }
            }
        },
        prePlayUpdate: function(){
            Pizzicato.masterGainNode.gain.value = this.mixer.volume.value;
        }
    },
    computed: {
        masterVolume: function(){
            return parseInt(this.mixer.volume.value * 50);
        },
        toggleButton: function(mixerStrip){
            return(mixerStrip);
        }
    }
});
