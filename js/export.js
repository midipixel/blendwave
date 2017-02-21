var audioExport = {
    onload: function(){
        console.log('Export Panel Loaded');
    },
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

        //After the sound is played, creates download link
        // Adds 100ms to be sure
        patch.sound.sourceNode.onended = function(){
            time = 100 + patch.sound.release;
            window.setTimeout(createDownloadLink, time);
        }

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
                hf.download = wave.file + '_' + new Date().toISOString() + '.wav';
                //hf.download = new Date().toISOString() + '.wav';
                hf.innerHTML = hf.download;
                li.appendChild(au);
                li.appendChild(hf);
                recordingslist.appendChild(li);
            });
        }
    }
}