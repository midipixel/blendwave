Vue.component('filterpanel', {
    props: ['active'],
    template: '#filterPanel',
    data: function(){
        return {
            selected: 'lowpass',
            filter: {
                lowpass: {
                    pizEffect: {},
                    params: {
                        cutoff: {
                            default: 100,
                            value: 300,
                            min: 100,
                            max: 22000,
                            step: 100
                        }
                    }
                },
                highpass: {
                    pizEffect: {},
                    params: {
                        cutoff: {
                            default: 100,
                            value: 100,
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
        }
    }
});
