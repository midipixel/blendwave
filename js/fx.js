/* Global Data Object - Stores data from the currently active effect */
var slotData = {
    fxSlot1: {
        params: {}
    },
    fxSlot2: {
        params: {}
    },
    updateData: function(slot, params){
        // Update slot data with an effect's parameters in a nice key value format
        for (var param in params){
            this[slot].params[params[param].name] = parseFloat(params[param].value);
        };    
    }
}

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

/* Main Effects Vue Instance */
fxPanel = new Vue({
    el: '#fx',
    data: {
        fxList : effects,
        fxSlots : {
            fxSlot1: {
                active: false,
                selected: 'none',
                pizEffect: {},
                fxButtonText: 'off'
            },
            fxSlot2: {
                active: false,
                selected: 'none',
                pizEffect: {},
                fxButtonText: 'off'
            },            
        }
    },
    methods: {
        toggleFX: function(slot){
            var fxSlot = this.fxSlots[slot];
            
            // Toggle Active State and Button Text
            fxSlot.active = !fxSlot.active;

            // Change UI according to the effect being active or not
            if(fxSlot.active) {
                fxSlot.fxButtonText = 'on'
                document.querySelector('#' + slot + ' .fxControls select').removeAttribute('disabled');
            }
            else {
                fxSlot.fxButtonText = 'off';
                document.querySelector('#' + slot + ' .fxControls select').setAttribute('disabled', 'disabled');
            }
        },
        setFX: function(slot){
            var fxSlot = this.fxSlots[slot];
            var effect = fxSlot.selected;
            
             //If there is a Pizzicato effect applied
            if(fxSlot.pizEffect.outputNode){ 
                //Remove it from the patch and clear its reference from the vue instance
                patch.sound.removeEffect(fxSlot.pizEffect);
                fxSlot.pizEffect = {};
            }

            if (effect != 'none'){
                var fxkey = effect.toLowerCase();
                var fxParams = this.fxList[fxkey].params;
                
                //Update slot data with the effect's initial parameters
                slotData.updateData(slot, fxParams);                
                
                //Create a new pizzicato effect from user selection, passing the params object
                fxSlot.pizEffect = new Pizzicato.Effects[effect](fxParams);
                
                //Apply effect to sound
                patch.sound.addEffect(fxSlot.pizEffect);
            }
        },
        resetFX: function(){
            for (var slot in this.fxSlots){
                this.fxSlots[slot].selected = 'none';
                this.fxSlots[slot].pizEffect = {};
                this.toggleFX(slot);                
            }
        }
    }
});

