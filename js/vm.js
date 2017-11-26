var bw = new Vue({
    el: '#blendwave',
    data: {
        panels: {
            wavePanel: {
                active: false
            },
            envelopePanel: {
                active: false,
                disabled: false
            },
            filterPanel: {
                active: false,
                disabled: false
            },
            fxPanel: {
                active: false,
                disabled: false
            },
            exportPanel: {
                active: false
            }
        },
        file: {
            name: 'sine.wav',
            path: 'samples/sine.wav'
        },
        locale: 'en',
        content: content.general,
        mainClass: ''
    },
    methods: {
        activatePanel: function(panel){
            if(!this.panels[panel].disabled){
                for (p in this.panels){
                    this.panels[p].active = false;
                }
                this.panels[panel].active = true;
            }
            this.mainClass = panel;
        },
        resetData: function(){
            bw.$refs.fxPanel.resetFX();
            bw.$refs.envelopePanel.resetDefaults();
            bw.$refs.filterPanel.resetDefaults();
        }
    },
    mounted: function(){
        //Create Patch Object, which stores the pizzicato sound
        patch.create();

        //Bind Keyboard Events
        $('body').on('keydown', function(e){
            //Play audio on 'P' press
            if(e.keyCode == 80){
                patch.play();
            }
        });

        $('body').on('keyup', function(e){
            //Stop audio on 'P' release
            if(e.keyCode == 80){
                patch.stop();
            }
        });

        //Activate Default Panel
        this.activatePanel('envelopePanel');
    }
});
