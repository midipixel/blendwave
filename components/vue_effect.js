/* Effect Component */
Vue.component('effect', {
    props: ['fxname', 'fxslot'],
    template: '#effectTemplate',
    data: function() {
        return {
            fxList: effects,
            fxParams: this.getFxParams(this.fxname)
        };
    },
    methods: {
        getFxParams: function(id){
            // Create a unique copy from the effects object, or vue will make a reference
            var effectsCopy = JSON.parse(JSON.stringify(effects)); 
            // Clone the params array
            var params = [];
            params = effectsCopy[id].params.slice();

            return params;
        },
        updateSlotData(){
            // Update slot data with this components parameters
            slotData.updateData(this.fxslot, this.fxParams);
        }        
    }
});