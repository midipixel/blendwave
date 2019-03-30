//Logs a value on the console at a set inverval
var util = {
    logValue: function(){
        var interval =  0;

        this.start = function(v){
            interval = window.setInterval(function(){console.log(v)}, 100);
        };

        this.stop = function(){
            window.clearInterval(interval);
        };
    },

    capitalize: function(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};

