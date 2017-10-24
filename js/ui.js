/* Global UI */

var ui = {
    fileHeader: {
        update: function(){
            $('.fileHeader span').html(bw.$refs.wavePanel.fileName);
        },
        setState: function(state){
            if (state === 'active'){
                $('.fileHeader').addClass('fileHeader_active');
            }
            else if(state === 'default'){
                $('.fileHeader').removeClass().addClass('fileHeader');
            }
        }
    }
}


