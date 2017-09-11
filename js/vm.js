var bw = new Vue({
    el: '#blendwave',
    data: {
        panels: {
            activePanel: 'exportPanel'
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
            ui.fileHeader.update();
        }
    },
    mounted: function(){
        this.mainInit();
    }
});
