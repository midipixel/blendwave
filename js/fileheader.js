/* File Header: Shared component */
Vue.component('fileheader', {
    template: '#fileHeader',
    data: function() {
        return {
            content: content.fileHeader,
            active: false
        }
    },
    methods: {
        play: function(){
            this.active = true;
            if(!bw.$refs.wavePanel.loading){
                patch.play();
            }
        },
        stop: function(){
            this.active = false;
            patch.stop();
        }
    },
    computed: {
        fileName: function(){
            return this.$root.file;
        }
    }
});
