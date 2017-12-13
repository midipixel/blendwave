/* Wave Panel: Sound File Loader */
Vue.component('wavepanel', {
    props: ['active'],
    template: '#wavePanel',
    data: function(){
        return {
            content: content.wavePanel,
            loading: false,
            wavesurfer: null,
            category: 'animals',
            activeElement: null
        }
    },
    methods: {
        changeFile: function(event){
            this.$root.file.path = event.target.href;

            //Update filename
            var fileString = event.target.href.split('/');
            var pos = fileString.length - 1;
            this.$root.file.name = fileString[pos];

            this.loading = true;

            //Set visual styles
            if(this.activeElement != null){
                $(this.activeElement).removeClass('active');
            }
            $(event.srcElement).addClass('active');
            this.activeElement = event.srcElement;

            //Reset Data
            bw.resetData();

            //Load new sound
            patch.sound.stop();

            patch.sound = new Pizzicato.Sound({
                source: 'file',
                options: { path: this.$root.file.path }
            }, function() {
                bw.$refs.wavePanel.loading = false;
                patch.play();
            });

            //load file into Wave Previewer
            this.wavesurfer.load(this.$root.file.path);
        },
        changeCategory: function(event){
            this.category = event.srcElement.id;

            $('.sampleCategories li').removeClass('active');
            $(event.srcElement).addClass('active');
        }
    },
    mounted: function(){
        //Initialize Wave Previewer
        this.wavesurfer = WaveSurfer.create({
            container: '#wavePreview',
            waveColor: '#fff',
            progressColor: 'purple',
            height: 80
        });

        this.wavesurfer.load(this.$root.file.path);
    }
});


