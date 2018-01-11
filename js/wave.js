/* Wave Panel: Sound File Loader */
Vue.component('wavepanel', {
    props: ['active'],
    template: '#wavePanel',
    data: function () {
        return {
            content: content.wavePanel,
            loading: false,
            wavesurfer: null,
            category: 'animals',
            activeElement: null,
            offset: 0
        }
    },
    methods: {
        changeFile: function(event){
            this.$root.soundOptions.path = event.target.href;

            //Update filename
            var fileString = event.target.href.split('/');
            var pos = fileString.length - 1;
            var fileName = fileString[pos].split('.');
            this.$root.file = fileName[0];

            this.loading = true;

            //Set visual styles
            if(this.activeElement != null){
                $(this.activeElement).removeClass('active');
            }
            $(event.target).addClass('active');
            this.activeElement = event.target;

            //Reset Data
            this.$root.resetData();

            //Load new sound
            patch.sound.stop();
            patch.sound.disconnect();

            patch.sound = new Pizzicato.Sound({
                source: 'file',
                options: this.$root.soundOptions
            }, function() {
                bw.$refs.wavePanel.loading = false;
                patch.play();
            });

            //load file into Wave Previewer
            this.wavesurfer.load(this.$root.soundOptions.path);
        },
        changeCategory: function(event){
            this.category = event.target.id;

            $('.sampleCategories li').removeClass('active');
            $(event.target).addClass('active');
        },
        resetDefaults: function(){
            this.offset = 0;
        }
    },
    mounted: function(){
        // Get random file from DOM node list
        var files = $('.fileList a');
        var rnd = Math.floor(Math.random() * files.length);
        var rndElement = files[rnd];
        this.activeElement = rndElement;

        // Organize info from file path
        var path = rndElement.href.split('/');
        var folder = path[path.length - 3];
        var category = path[path.length - 2];
        var file = path[path.length - 1];
        var name = rndElement.innerHTML;

        //Update VM Data with random file
        this.category = category;
        this.$root.file = name;
        this.$root.soundOptions.path = folder + '/' + category + '/' + file;
        //this.$root.soundOptions.path = 'samples/synth/sine.mp4';

        //Set UI active styles
        $('.sampleCategories ' + '#' + category).addClass('active');
        $(rndElement).addClass('active');

        //Initialize Wave Previewer
        this.wavesurfer = WaveSurfer.create({
            container: '#wavePreview',
            waveColor: '#d0d4de',
            progressColor: '#4b4f58',
            cursorColor: '#fff',
            cursorWidth: 3,
            height: 80
        });

        var self = this;

        this.wavesurfer.on('seek', function(){
            time = self.wavesurfer.getCurrentTime().toFixed(2);
            self.offset = parseFloat(time);
        });

        this.wavesurfer.load(this.$root.soundOptions.path);
    }
});


