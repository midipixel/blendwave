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
        file: '',
        soundOptions: {
            path: '',
            attack: 0.04,
            volume: 1,
            loop: false
        },
        locale: bwLocale,
        content: content.general,
        mainClass: '',
        loaded: false,
        credits: {
            visible: false,
            content: content.credits
        }
    },
    methods: {
        activatePanel: function(panel){
            if(!this.panels[panel].disabled){
                for (p in this.panels){
                    this.panels[p].active = false;
                }
                this.panels[panel].active = true;
                this.mainClass = panel;

                //Clear URL bar and add page param for analytics
                var url="?p=" + panel;
                history.pushState({panel: panel}, 'Blendwave', url);

                //Analytics
                this.gaSend('screenview', {screenName: panel});
            }
        },
        resetData: function(){
            bw.$refs.wavePanel.resetDefaults();
            bw.$refs.fxPanel.resetFX();
            bw.$refs.envelopePanel.resetDefaults();
            bw.$refs.filterPanel.resetDefaults();
        },
        initializePatch: function(){
            //Create Patch Object, which stores the pizzicato sound
            patch.sound = new Pizzicato.Sound({
                source: 'file',
                options: this.soundOptions
            }, function() {
                patch.analyser.create();
                ampEnvelope.create();
                //console.log(patch.sound);
            });
        },
        closeModal: function(modal){
            this.credits.visible = false;
        },
        hidePreloader: function(){
            pl = document.getElementById('preLoader');
            pl.style.display = "none";
        },
        gaSend: function(hitType, params){
            if(window.ga){
                if (hitType === 'screenview'){
                    ga('send', hitType, params);
                }
                else if(hitType === 'event'){
                    params.hitType = hitType;
                    ga('send', params);
                }
            }
        }
    },
    mounted: function(){
        this.initializePatch();

        //Bind Keyboard Events
        $('body').on('keydown', function(e){
            //Play audio on 'P' press
            if(e.keyCode == 80 && !e.repeat){
                bw.$refs.fileHeader.play();
                bw.gaSend('event', { eventCategory: 'Keyboard', eventAction: 'Preview Audio',});
            }
        });

        $('body').on('keyup', function(e){
            //Stop audio on 'P' release
            if(e.keyCode == 80){
                bw.$refs.fileHeader.stop();
            }
        });

        //Activate Default Panel
        this.activatePanel('filterPanel');

        this.loaded = true;
        this.hidePreloader();
    }
});
