var bw = new Vue({
    el: '#blendwave',
    data: {
        panels: {
            activePanel: 'wavePanel'
        },
        file: {
            name: 'sine.wav',
            path: 'samples/sine.wav'
        },
        locale: 'pt'
    },
    methods: {
        activatePanel: function(panel){
            this.panels.activePanel = panel;
        },
        resetData: function(){
            bw.$refs.fxPanel.resetFX();
            bw.$refs.envelopePanel.resetDefaults();
            bw.$refs.filterPanel.resetDefaults();
        }
    },
    mounted: function(){
        patch.create();

        //Bind Keyboard Events
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
});
