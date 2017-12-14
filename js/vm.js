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
            name: ' ',
            path: 'samples/animals/pig03.mp4'
        },
        locale: 'en',
        content: content.general,
        mainClass: '',
        loaded: false
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
        },
        initializePatch: function(){
            //Create Patch Object, which stores the pizzicato sound
            patch.sound = new Pizzicato.Sound({
                source: 'file',
                options: {
                    path: this.file.path,
                    attack: 0.04,
                    volume: 1,
                    loop: false
                }
            }, function() {
                patch.analyser.create();
                //console.log(patch.sound);
            });
        }
    },
    mounted: function(){
        this.initializePatch();

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
        this.activatePanel('wavePanel');

        this.loaded = true;
    }
});
