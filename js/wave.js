/* Wave Panel: Sound File Loader */
Vue.component('wavepanel', {
    props: ['active'],
    template: '#wavePanel',
    data: function(){
        return {
            selectedElement: ' ',
            fileName: ' ',
            loading: false,
            wavesurfer: null
        }
    },
    methods: {
        changeFile: function(event){
            this.selectedElement = event.target;
            patch.file = event.target.href;

            //Store filename from full URL string
            var fileString = event.target.href.split('/');
            var pos = fileString.length - 1;
            this.fileName = fileString[pos];

            this.loading = true;

            //Set visual styles
            $('#fileList li').removeClass('active');
            $(this.selectedElement).parent().addClass('active');

            //Reset Data
            patch.resetData();
            bw.$refs.fxPanel.resetFX();

            //Load new sound
            patch.sound.stop();

            patch.sound = new Pizzicato.Sound({
                source: 'file',
                options: { path: patch.file }
            }, function() {
                bw.$refs.wavePanel.loading = false;
                patch.play();
            });

            this.wavesurfer.load(patch.file);

            //Update old, non-vue UI
            ui.fileHeader.update();
            ui.reset();
            //console.log(waveFile);
        }
    },
    mounted: function(){
        //Initialize Wave Preview
        this.wavesurfer = WaveSurfer.create({
            container: '#wavePreview',
            waveColor: 'violet',
            progressColor: 'purple'
        });
    }
});


