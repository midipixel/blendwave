$(function(){
    //Initialize jQuery UI Tab Widget
    $( "#blendwave" ).tabs({
        active: 3,
        disabled: [],
        create: function(){
            main.init();
        },
        activate: function( event, ui ) {
            var loadedPanel = $(ui.newPanel).data();

            switch(loadedPanel.panelname){
                case 'wave':
                    console.log('Wave Panel');
                break;
                case 'envelope':
                    console.log('Envelope Panel');
                break;
                case 'filter':
                    console.log('Filter Panel');
                break;
                case 'fx':
                    console.log('FX Panel');
                break;
                case 'export':
                    console.log('Export Panel');
                break;
            }
        }
    });
});

var main = {
    init: function(){
        //Initialize all panels
        wave.init();
        audioExport.init();

        //Create initial patches
        patches.init();

        //Initialize UI
        ui.init();
        ui.fileHeader.update();

        console.log("INIT OK");
    }
}
