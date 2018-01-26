<?php ob_start("ob_gzhandler"); ?>

<!DOCTYPE HTML>

<html>

<head>
    <title>Blendwave</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" type="image/png" href="img/favicon.png" />

    <link rel="stylesheet" type="text/css" href="css/preloader.css">
    <link rel="stylesheet" type="text/css" href="css/vendor/bootstrap-reboot.min.css">
    <link rel="stylesheet" type="text/css" href="css/vendor/bootstrap-grid.min.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<body>
    <?php include("preloader.php") ?>

        <div class="mobileWarning">
            <img src="img/bw_logo.svg" alt="blendwave">
            <p>Hey there! I promise Blendwave will be responsive soon. But for now, please use a modern desktop browser that <a href="https://caniuse.com/#feat=audio-api" target="_parent">supports the Web Audio API</a> <em>(*ahem* Chrome, Opera or Firefox *ahem*)</em></p>
            <p>Also, if you're seeing this because your desktop browser window is too narrow, just zoom out. ;)</p>
            <p>Cheers!</p>
        </div>

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

    <?php include("locale.php") ?>
    <?php include("scripts.php") ?>
</body>
</html>

<?php ob_end_flush(); ?>
