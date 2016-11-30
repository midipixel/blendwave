$(function(){
    //Initialize jQuery UI Tab Widget
    $( "#blendwave" ).tabs({
        active: 0,
        create: function(){
            main.init();
            //This is here while I don't find out if there is a callback for the default tab
            wave.init();
        },
        activate: function( event, ui ) {
            var loadedPanel = $(ui.newPanel).data();

            switch(loadedPanel.panelname){
                case 'wave':
                    wave.init();
                break;
                case 'envelope':
                    envelope.init();
                break;
                case 'filter':
                    filter.init();
                break;
                case 'fx1':
                    fx.init();
                break;
                case 'fx2':
                    fx.init();
                break;
                case 'export':
                    audioExport.init();
                break;
            }
        }
    });
});

var main = {
    init: function(){
        //Add Global Listeners
        $('.fileHeader').on('click', function(){
            wave.sound.play();
        })

        main.updateFile();

        console.log("Main init OK");
    },
    updateFile: function(){
        $('.fileHeader span').html(wave.file);
    }
}
