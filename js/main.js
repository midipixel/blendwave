$(function(){
    //Initialize jQuery UI Tab Widget
    $( "#mainNav" ).tabs({
        active: 5,
        load: function( event, ui ) {
            main.init();

            var loadedPanel = $(ui.panel[0]).children().data();
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
    },
    updateFile: function(){
        $('.fileHeader span').html(wave.file);
    }
}
