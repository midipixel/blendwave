$(function(){
    //Initialize jQuery UI Tab Widget
    $( "#blendwave" ).tabs({
        active: 0,
        disabled: [2,3,4],
        create: function(){
            main.init();
        },
        activate: function( event, ui ) {
            var loadedPanel = $(ui.newPanel).data();

            switch(loadedPanel.panelname){
                case 'wave':
                    wave.panel();
                break;
                case 'envelope':
                    envelope.panel();
                break;
                case 'filter':
                    filter.panel();
                break;
                case 'fx1':
                    fx.panel();
                break;
                case 'fx2':
                    fx.panel();
                break;
                case 'export':
                    audioExport.panel();
                break;
            }
        }
    });
});

var main = {
    init: function(){
        //Initialize all panels
        wave.init();
        envelope.init();
        audioExport.init();

        //Create initial patches
        patches.init();

        //Initialize UI
        ui.init();
        ui.fileHeader.update();

        console.log("INIT OK");
    }
}
