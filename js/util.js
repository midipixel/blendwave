//Logs a value on the console at a set inverval
var logValue = {
    interval: 0,
    start: function(v){
        interval = window.setInterval(function(){console.log(v)}, 100);
    },
    stop: function(){
        window.clearInterval(interval);
    }
}