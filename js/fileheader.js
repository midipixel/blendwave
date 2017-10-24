/* File Header: Shared component */
Vue.component('fileheader', {
    template: '#fileHeader',
    computed: {
        fileName: function(){
            return this.$root.file;
        }
    }
});
