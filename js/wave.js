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
            $(event.target).addClass('active');
            this.activeElement = event.target;

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
            this.category = event.target.id;

            $('.sampleCategories li').removeClass('active');
            $(event.target).addClass('active');
        }
    },
    mounted: function(){
        // Get random file from DOM node list
        var files = $('.fileList a');
        var rnd = Math.floor(Math.random() * files.length);
        var rndElement = files[rnd];

        // Organize info from file path
        var path = files[rnd].href.split('/');
        var folder = path[path.length - 3];
        var category = path[path.length - 2];
        var file = path[path.length - 1];
        var name = rndElement.innerHTML;

        //Update VM Data with random file
        this.category = category;
        this.$root.file.name = name;
        this.$root.file.path = folder + '/' + category + '/' + file;

        //Set UI active styles
        $('.sampleCategories ' + '#' + category).addClass('active');
        $(rndElement).addClass('active');

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


