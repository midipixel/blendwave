$(function(){
    //Initialize jQuery UI Tab Widget
    $( "#blendwave" ).tabs({
        active: 1,
        disabled: [3],
        create: function(){
            main.init();
        },
        activate: function( event, ui ) {
            var loadedPanel = $(ui.newPanel).data();

            switch(loadedPanel.panelname){
                case 'wave':
                    wave.onload();
                break;
                case 'envelope':
                    envelope.onload();
                break;
                case 'filter':
                    filter.onload();
                break;
                case 'fx1':
                    fx.onload();
                break;
                case 'fx2':
                    fx.onload();
                break;
                case 'export':
                    audioExport.onload();
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
