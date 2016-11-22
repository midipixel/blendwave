$(function(){
    $( "#mainNav" ).tabs({
        load: function( event, ui ) {
            var loadedPanel = $(ui.panel[0]).children().data();
            switch(loadedPanel.panelname){
                case 'wave':
                    wave.init();
                break;
            }
        }
    });


});
