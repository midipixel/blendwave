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
        },
        resetData: function(){
            bw.$refs.fxPanel.resetFX();
            bw.$refs.envelopePanel.resetDefaults();
            bw.$refs.filterPanel.resetDefaults();
        }
    },
    mounted: function(){
        this.mainInit();
    }
});
