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
    <div class="container">
        <div id="blendwave">
        	<ul>
        		<li><a href="#wave">Fonte Sonora</a></li>
        		<li><a href="#envelope">Envelope</a></li>
        		<li><a href="#filter">Filtro</a></li>
        		<li><a href="#fx">Efeitos</a></li>
        		<li><a href="#export">Saída</a></li>
        	</ul>

            <?php include("wave.php"); ?>
            <?php include("envelope.php"); ?>
            <?php include("filter.php"); ?>

            <fxpanel ref="fxPanel"></fxpanel>
            
            <?php include("export.php"); ?>
        </div>
    </div>

    <!-- Vendor -->
    <script src="js/vendor/jquery-3.1.1.min.js"></script>
    <script src="js/vendor/jquery-ui.min.js"></script>
    <script src="js/vendor/vue.js"></script>

    <script src="js/vendor/recorder.js"></script>
    <script src="js/vendor/Pizzicato.js"></script>

    <!-- Application -->
    <script src="js/util.js"></script>
    <script src="js/main.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/patches.js"></script>
    <script src="js/wave.js"></script>
    
    <script src="js/fx.js"></script>
    <?php include("fx.php"); ?>    
    
    <script src="js/export.js"></script>
    <script src="js/vm.js"></script>
</body>
</html>