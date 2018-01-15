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
            patch.play();
        },
        stop: function(){
            self = this;

            var fh = this.$el;
            fh.ontransitionend = function(){
                self.active = false;
            };

            patch.stop();
        }
    },
    computed: {
        fileName: function(){
            return this.$root.file;
        }
    }
});
