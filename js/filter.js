Vue.component('filterpanel', {
    props: ['active'],
    template: '#filterPanel',
    data: function(){
        return {
            selected: "lowpass",
            none: {
                name: "Sem Filtro"
            },
            lowpass : {
                name: "Passa Baixa (LP)",
                description: "Filtra as altas frequências",
                pizEffect: {},
                params: {
                    cutoff: {
                        name: "Frequência de Corte",
                        default: 100,
                        value: 100,
                        min: 100,
                        max: 22000,
                        step: 100
                    }
                }
            },
            highpass : {
                name: "Passa Alta (HP)",
                description: "Filtra as baixas frequências",
                pizEffect: {},
                params: {
                    cutoff: {
                        name: "Frequência de Corte",
                        default: 100,
                        value: 100,
                        min: 100,
                        max: 22000,
                        step: 100
                    }
                }
            },
            osc: {
                on: false,
                oscNode: null,
                gainNode: Pizzicato.context.createGain()
            }
        }
    },
    methods: {
        set: function(){
            console.log(this.selected);
        }
    }
});
