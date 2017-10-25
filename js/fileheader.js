/* File Header: Shared component */
Vue.component('fileheader', {
    template: '#fileHeader',
    data: function() {
        return {
            content: content.fileHeader
        }
    },
    methods: {
        play: function(){
            patch.play();
        },
        stop: function(){
            patch.stop();
        }
    },
    computed: {
        fileName: function(){
            return this.$root.file.name;
        }
    }
});
