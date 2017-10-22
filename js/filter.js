Vue.component('filterpanel', {
    props: ['active'],
    template: '#filterPanel',
    data: function(){
        return {
            selected: 'none',
            filter: {
                lowpass: {
                    pizEffect: {},
                    params: {
                        cutoff: {
                            default: 300,
                            value: 300,
                            min: 20,
                            max: 20000,
                            step: 100
                        }
                    }
                },
                highpass: {
                    pizEffect: {},
                    params: {
                        cutoff: {
                            default: 1000,
                            value: 1000,
                            min: 100,
                            max: 22000,
                            step: 100
                        }
                    }
                },
            },
            osc: {
                active: false,
                oscNode: null,
                gainNode: Pizzicato.context.createGain()
            },
            content: {
                pt: {
                    title: 'Filtro',
                    subtitle: 'Refine o som, filtrando as frequências altas ou baixas',
                    filterType: 'Tipo de Filtro',
                    highpass: ["Passa Alta (HP)", "Filtra as baixas frequências"],
                    lowpass: ["Passa Baixa (LP)", "Filtra as altas frequências"],
                    none: "Nenhum",
                    cutoff: 'Frequência de Corte',
                    oscillateFilter: "Oscilar Filtro",
                    speed: "Velocidade",
                    depth: "Força"
                }
            }
        }
    },
    methods: {
        set: function(){
            console.log(this.selected);
            if (this.selected != 'none'){
                patch.sound.addEffect(this.filter[this.selected].pizEffect);
            }
        },
        prePlayUpdate: function(){
            if (this.selected != 'none'){
                this.filter[this.selected].pizEffect.frequency = this.filter[this.selected].params.cutoff.value;
            }
        },
        setOSC: function(){
            if(this.selected != 'none'){
                //If there is already an oscillator, disconnect
                if(this.osc.oscNode){
                    this.osc.oscNode.disconnect();
                }

                //Create Oscillator, set up frequency
                this.osc.oscNode = Pizzicato.context.createOscillator();
                this.osc.oscNode.frequency.value = 5;

                //Connect OSC -> gain -> filter frequency
                this.osc.oscNode.connect(this.osc.gainNode);
                this.osc.gainNode.connect(this.filter[this.selected].pizEffect.filterNode.frequency);
                this.osc.oscNode.start();

                if (this.osc.active){
                    this.osc.gainNode.gain.value = 4000;
                    console.log(this.osc.gainNode);
                }
                else {
                    this.osc.gainNode.gain.value = 0;
                }
            }
        },
        postPlayUpdate: function(){
            this.setOSC();
        },
        ignoreKeyboard: function(e){
            // Ignore keys on combobox, so that the user can use "P" to preview
            if (e.keyCode >= 65 && e.keyCode <= 90) // A to Z
            {
                e.returnValue=false;
                e.cancel = true;
            }
        },
        resetDefaults: function(){
            //Reset filter params
            this.selected = 'none';
            this.filter.lowpass.params.cutoff.value = this.filter.lowpass.params.cutoff.default;
            this.filter.highpass.params.cutoff.value = this.filter.highpass.params.cutoff.default;

            //Reset osc params
            this.osc.active = false;
        }
    },
    mounted: function() {
        this.filter.lowpass.pizEffect = new Pizzicato.Effects.LowPassFilter({
            frequency: this.filter.lowpass.params.cutoff.value,
            mix: 0
        }),
        this.filter.highpass.pizEffect = new Pizzicato.Effects.HighPassFilter({
            frequency: this.filter.lowpass.params.cutoff.value,
            mix: 0
        })
    }
});
