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
                on: false,
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
