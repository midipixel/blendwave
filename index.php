<!DOCTYPE HTML>

<html>

<head>
    <title>Blendwave</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" type="image/png" href="img/favicon.png" />

    <link rel="stylesheet" type="text/css" href="css/vendor/bootstrap-reboot.css">
    <link rel="stylesheet" type="text/css" href="css/vendor/bootstrap-grid.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<body>
    <main id="blendwave" :class="mainClass">
        <?php include("header.php") ?>

        <article class="container bwBody">
            <wavepanel ref="wavePanel" :active="panels.wavePanel.active"></wavepanel>
            <envelopepanel ref="envelopePanel" :active="panels.envelopePanel.active"></envelopepanel>
            <filterpanel ref="filterPanel" :active="panels.filterPanel.active"></filterpanel>
            <fxpanel ref="fxPanel" :active="panels.fxPanel.active"></fxpanel>
            <exportpanel ref="exportPanel" :active="panels.exportPanel.active"></exportpanel>
        </article>

        <?php include("footer.php") ?>
    </main>

    <!-- Analytics -->
    <?php
        // Include Analytics only when on production
        if($_SERVER["REMOTE_ADDR"] != "127.0.0.1"){
            include_once("analytics.php");
        }
    ?>

    <!-- Vendor -->
    <script src="js/vendor/zepto.min.js"></script>
    <script src="js/vendor/anime.min.js"></script>
    <script src="js/vendor/vue.js"></script>

    <script src="js/vendor/recorder.js"></script>
    <script src="js/vendor/Pizzicato.js"></script>
    <script src="js/vendor/wavesurfer-1.4.0.js"></script>

    <!-- Application -->
    <script src="js/data/content.js"></script>
    <script src="js/util.js"></script>
    <script src="js/patches.js"></script>

    <script src="js/fileheader.js"></script>
    <?php include("fileheader.php"); ?>

    <script src="js/modaloverlay.js"></script>
    <?php include("modaloverlay.php"); ?>

    <script src="js/wave.js"></script>
    <?php include("wave.php"); ?>
    
    <script src="js/envelope.js"></script>
    <?php include("envelope.php"); ?>

    <script src="js/filter.js"></script>
    <?php include("filter.php"); ?>

    <script src="js/data/fx_data.js"></script>
    <script src="js/fx.js"></script>
    <?php include("fx.php"); ?>    
    
    <script src="js/export.js"></script>
    <?php include("export.php"); ?>

    <script src="js/vm.js"></script>
</body>
</html>
