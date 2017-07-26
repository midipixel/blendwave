var audioExport = {
    init: function(){
        $('#exportBtn').on('click', function(){
            audioExport.exportFile();
        })
    },
    exportFile: function(){
        //Create Recorder object, connected to the sound's output node
        var recorder = new Recorder(patch.sound.masterVolume);

        //Turns recorder on, plays the sound
        recorder.record();
        patch.play();
        patch.sound.stop();

        // Verifies the analyser node's frequencies at a short interval
        function verifyMute(){
            var bufferLength = 4;
            dataArray = new Uint8Array(bufferLength);
            patch.analyser.node.getByteFrequencyData(dataArray);

            if (dataArray[0] < 1){
                // When output is mute, creates download link

                clearInterval(interval);

                // Adds 100ms to be sure
                time = 100 + patch.sound.release;
                window.setTimeout(createDownloadLink, time);
            }
        };

        var interval = setInterval(function(){
            verifyMute();
        },20);


        //Download link creation, copied from Recorder's example
        function createDownloadLink() {
            recorder && recorder.exportWAV(function(blob) {
                var url = URL.createObjectURL(blob);
                var li = document.createElement('li');
                var au = document.createElement('audio');
                var hf = document.createElement('a');

                au.controls = true;
                au.src = url;
                hf.href = url;
                hf.download = patch.data.file + '_' + new Date().toISOString() + '.wav';
                //hf.download = new Date().toISOString() + '.wav';
                hf.innerHTML = hf.download;
                li.appendChild(au);
                li.appendChild(hf);
                recordingslist.appendChild(li);
            });
        }
    }
}
