var default_data = {
    file: 'samples/sine.wav',
    attack: 0.01,
    release: 0.04,
    detune: 1,
    tremolo_speed: 5,
    tremolo_depth: 1,
    vibrato_speed: 2,
    filter_type: 'noFilter',
    filter_cutoff: 500,
    filterOSC_speed: 1,
    filterOSC_depth: 0,
}

var patch = {
    data: {
        file: '',
        attack: 0,
        release: 0,
        detune: 0,
        tremolo_speed: 0,
        tremolo_depth: 0,
        vibrato_speed: 0,
        filter_type: '',
        filter_cutoff: 0,
        filterOSC_speed: 0,
        filterOSC_depth: 0,
    },
    effects: {
        tremolo: new Pizzicato.Effects.Tremolo({
            mix: 1,
            speed: default_data.tremolo_speed,
            depth: default_data.tremolo_depth
        }),
        vibrato: {
            on: false,
            set: function(){
                if (this.on){
                    var osc = Pizzicato.context.createOscillator();
                    osc.frequency.value = patch.data.vibrato_speed;
                    osc.connect(patch.sound.sourceNode.playbackRate);
                    osc.start();
                }
            }
        },
        filter: {
            lp : new Pizzicato.Effects.LowPassFilter({
                frequency: default_data.filter_cutoff,
                mix: 0
            }),
            hp : new Pizzicato.Effects.HighPassFilter({
                frequency: default_data.filter_cutoff,
                mix: 0
            }),
            osc: {
                on: false,
                oscNode: {},
                gainNode: Pizzicato.context.createGain(),
                set: function(){
                    if(patch.data.filter_type != 'noFilter'){                    
                        //Create Oscillator, set up frequency
                        patch.effects.filter.osc.oscNode = Pizzicato.context.createOscillator();
                        var osc = patch.effects.filter.osc.oscNode;
                        osc.frequency.value = patch.data.filterOSC_speed;

                        //Connect OSC -> gain -> filter frequency
                        var oscGain = patch.effects.filter.osc.gainNode;
                        osc.connect(oscGain);
                        oscGain.connect(patch.effects.filter[patch.data.filter_type].filterNode.frequency);
                        osc.start(); 

                        if (this.on){
                            var gainValue = patch.data.filterOSC_depth;
                            oscGain.gain.value = gainValue;
                        }
                        else {
                            oscGain.gain.value = 0;                        
                        }
                    }
                }
            }
        }
    },
    sound: {},
    create: function(){
        patch.resetData();
        patch.sound = new Pizzicato.Sound({
            source: 'file',
            options: {
                path: patch.data.file,
                attack: patch.data.attack + 0.04,
                volume: patch.data.volume,
                loop: true
            }
        }, function() {
            //console.log(patch.sound);
        });
    },
    resetData: function(){
        for (var property in patch.data) {
            patch.data[property] = default_data[property];
        }
    },
    updateData: function(){
        //Volume Envelope
        patch.sound.volume = 1;
        patch.sound.attack = patch.data.attack;
        patch.sound.release = patch.data.release;

        //Tremolo
        patch.effects.tremolo.speed = patch.data.tremolo_speed;
        patch.effects.tremolo.depth = patch.data.tremolo_depth;

        //Filter
        if(patch.data.filter_type != 'noFilter'){
            patch.effects.filter[patch.data.filter_type].frequency = patch.data.filter_cutoff;       
        }
        
        //Effects
        for (var slot in fxPanel.fxSlots){     
            //If the panel is active, apply parameters from the sliders. If inactive
            if(fxPanel.fxSlots[slot].active){
                // For each effect slot, update pizzicato parameters with the ones from the component
                if (fxPanel.fxSlots[slot].selected != 'none'){
                    var pizEffect = fxPanel.fxSlots[slot].pizEffect;
                    var fxParams = fxPanel.getParams(fxPanel.fxSlots[slot]);

                    for(var param in fxParams){
                        pizEffect[param] = parseFloat(fxParams[param]);
                    }            
                }
            }
            // If the panel is inactive, mute the effect
            else{    
                if(fxPanel.fxSlots[slot].selected != 'Distortion'){
                    fxPanel.fxSlots[slot].pizEffect.mix = 0;                    
                }
                else{
                    // Distortion can't really be muted, and setting the gain to 0 lowers the audio, so I'm hacking it
                    fxPanel.fxSlots[slot].pizEffect.gain = 0.1;                    
                }                
            }
        }
    },
    play: function(){
        patch.updateData();
        patch.sound.play();
        patch.effects.filter.osc.set();        
        patch.effects.vibrato.set();
        //Detune must be called right after playing, or the node won't exist
        patch.sound.sourceNode.detune.value = patch.data.detune;
    },
    stop: function(){
        patch.sound.stop();

        //Disconnect useless filter oscillator from gain node, after release time
        if(patch.data.filter_type != 'noFilter'){
            var timeOut = patch.data.release * 1000;
            window.setTimeout(function(){
                patch.effects.filter.osc.oscNode.disconnect();        
            }, timeOut);
        }
    }
}

var patches = {
    init: function(){
        patch.create();
    }
}














