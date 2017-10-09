<!DOCTYPE HTML>

<html>

<head>
    <meta charset="utf-8">
    <title>Blendwave</title>

    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<?php
    $locale = 'pt'
?>

<body>
    <main class="container">
        <div id="blendwave">
            <nav class="mainNav">
                <ul>
                    <li><a href="#wavePanel" @click="activatePanel('wavePanel')">Fonte Sonora</a></li>
                    <li><a href="#envelopePanel" @click="activatePanel('envelopePanel')">Amplitude e Pitch</a></li>
                    <li><a href="#filterPanel" @click="activatePanel('filterPanel')">Filtro</a></li>
                    <li><a href="#fxPanel" @click="activatePanel('fxPanel')">Efeitos</a></li>
                    <li><a href="#exportPanel" @click="activatePanel('exportPanel')">Saída</a></li>
                </ul>
            </nav>

            <!-- vueJS Components -->
            <wavepanel ref="wavePanel" :active="panels.activePanel == 'wavePanel'"></wavepanel>
            <envelopepanel ref="envelopePanel" :active="panels.activePanel == 'envelopePanel'"></envelopepanel>
            <filterpanel ref="filterPanel" :active="panels.activePanel == 'filterPanel'"></filterpanel>
            <fxpanel ref="fxPanel" :active="panels.activePanel == 'fxPanel'"></fxpanel>
            <exportpanel ref="exportPanel" :active="panels.activePanel == 'exportPanel'"></exportpanel>
       </div>
    </main>

    <!-- Analytics -->
    <?php include_once("analytics.php") ?>

    <!-- Vendor -->
    <script src="js/vendor/jquery-3.1.1.min.js"></script>
    <script src="js/vendor/vue.js"></script>

    <script src="js/vendor/recorder.js"></script>
    <script src="js/vendor/Pizzicato.js"></script>

    <!-- Application -->
    <script src="js/util.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/patches.js"></script>

    <script src="js/wave.js"></script>
    <?php include("wave.php"); ?>
    
    <script src="js/envelope.js"></script>
    <?php include("envelope.php"); ?>

    <script src="js/filter.js"></script>
    <?php include("filter.php"); ?>

    <script src="js/fx.js"></script>
    <?php include("fx.php"); ?>    
    
    <script src="js/export.js"></script>
    <?php include("export.php"); ?>

    <script src="js/vm.js"></script>
</body>
</html>
