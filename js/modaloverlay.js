/* Modal Overlay: Shared Component */
Vue.component('modaloverlay', {
    template: '#modalOverlay',
    props: ['modalcontent', 'active'],
    data: function() {
        return {

        }
    },
    updated: function(){
        if(this.active){
            $('html').addClass('modalOn');
        }
        else{
            $('html').removeClass('modalOn');
        }
    }
});
