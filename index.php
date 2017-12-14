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
        <header class="bwHeader container">
            <nav class="row no-gutters mainNav">
                <figure class="col-md-2 logo">
                    <img src="img/bw_logo.svg" alt="Blendwave">
                </figure>

                <ul class="col-md-10" style="display: none;" v-show="loaded" >
                    <li class="wave">
                        <a href="#wavePanel" @click="activatePanel('wavePanel')">
                            <?php echo file_get_contents("img/ic_wave.svg"); ?>
                            {{ content[locale].wavePanel }}
                        </a>
                    </li>
                    <li :class="{envelope: true, disabled: panels.envelopePanel.disabled}">
                        <a :href="panels.envelopePanel.disabled ? null : '#envelopePanel'"
                           :title="panels.envelopePanel.disabled ? content[locale].disabledWarning : null"
                           @click="activatePanel('envelopePanel')">
                            <?php echo file_get_contents("img/ic_envelope.svg"); ?>
                            {{ content[locale].envelopePanel }}
                        </a>
                    </li>
                    <li :class="{filter: true, disabled: panels.filterPanel.disabled}">
                        <a :href="panels.filterPanel.disabled ? null : '#filterPanel'"
                           :title="panels.filterPanel.disabled ? content[locale].disabledWarning : null"
                           @click="activatePanel('filterPanel')">
                            <?php echo file_get_contents("img/ic_filter.svg"); ?>
                            {{ content[locale].filterPanel }}
                        </a>
                    </li>
                    <li :class="{fx: true, disabled: panels.fxPanel.disabled}">
                        <a :href="panels.fxPanel.disabled ? null : '#fxPanel'"
                           :title="panels.fxPanel.disabled ? content[locale].disabledWarning : null"
                           @click="activatePanel('fxPanel')">
                            <?php echo file_get_contents("img/ic_fx.svg"); ?>
                            {{ content[locale].fxPanel }}
                        </a>
                    </li>
                    <li class="export">
                        <a href="#exportPanel" @click="activatePanel('exportPanel')">
                            <?php echo file_get_contents("img/ic_export.svg"); ?>
                            {{ content[locale].exportPanel }}</a>
                    </li>
                </ul>
            </nav>
        </header>

        <fileheader></fileheader>

        <article class="container bwBody">
            <wavepanel ref="wavePanel" :active="panels.wavePanel.active"></wavepanel>
            <envelopepanel ref="envelopePanel" :active="panels.envelopePanel.active"></envelopepanel>
            <filterpanel ref="filterPanel" :active="panels.filterPanel.active"></filterpanel>
            <fxpanel ref="fxPanel" :active="panels.fxPanel.active"></fxpanel>
            <exportpanel ref="exportPanel" :active="panels.exportPanel.active"></exportpanel>
        </article>
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
