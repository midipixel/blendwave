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
        resetData: function(){
            bw.$refs.fxPanel.resetFX();
            bw.$refs.envelopePanel.resetDefaults();
            bw.$refs.filterPanel.resetDefaults();
        },
        initUI: function(){
            //Global File Play Input
            $('.fileHeader').on('mousedown', function(){
                ui.fileHeader.setState('active');
                patch.play();
                //logValue.start();
            })

            $('.fileHeader').on('mouseup', function(){
                ui.fileHeader.setState('default');
                patch.stop();
                //logValue.stop();
            })

            $('body').on('keydown', function(e){
                //Play audio on 'P' press
                if(e.keyCode == 80){
                    patch.play();
                }
            });

            $('body').on('keyup', function(e){
                //Stop audio on 'p' release
                if(e.keyCode == 80){
                    patch.stop();
                }
            });
        }
    },
    mounted: function(){
        patch.create();
        this.initUI();
    }
});
