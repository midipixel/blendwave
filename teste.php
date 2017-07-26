<!DOCTYPE HTML>

<html>

<head>
    <meta charset="utf-8">
    <title>Blendwave</title>

    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<body>
    <div class="container" id="view">
    <ol>
      <!-- Create an instance of the todo-item component -->
      <todo-item></todo-item>
    </ol>
    </div>

    <script src="js/vendor/vue.js"></script>
    <!--script src="js/fx.js"></script-->
    
    <script>
        Vue.component('todo-item', {
          template: '<li>This is a todo</li>'
        })
        
        vm = new Vue({
            el: "#view"
        })
        

    </script>

</body>
</html>