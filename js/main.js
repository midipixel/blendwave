$(function(){
    //Initialize jQuery UI Tab Widget
    $( "#mainNav" ).tabs({
        active: 0,
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
                    fx1.init();
                break;
                case 'fx2':
                    fx2.init();
                break;
            }
        }
    });
});

var main = {
    init: function(){
        //Add Global Listeners
        $('.fileHeader').on('click', function(){
            wave.playFile();
        })

        main.updateFile();
    },
    updateFile: function(){
        $('.fileHeader span').html(wave.file);
    }
}
