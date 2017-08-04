var bw = new Vue({
    el: '#blendwave',
    data: {
        panels: {
            activePanel: 'wavePanel'
        }
    },
    methods: {
        activatePanel: function(panel){
            this.panels.activePanel = panel;
        },
        mainInit: function(){
            //Initialize all panels
            audioExport.init();

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
