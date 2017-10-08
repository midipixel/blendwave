var bw = new Vue({
    el: '#blendwave',
    data: {
        panels: {
            activePanel: 'filterPanel'
        }
    },
    methods: {
        activatePanel: function(panel){
            this.panels.activePanel = panel;
        },
        mainInit: function(){
            //Create initial patches
            patch.create();

            //Initialize UI
            ui.init();
        }
    },
    mounted: function(){
        this.mainInit();
    }
});
