<?php
    //Common minified Scripts
    echo('<script src="js/vendor/zepto.min.js"></script>');
    echo('<script src="js/vendor/anime.min.js"></script>');
    echo('<script src="js/vendor/recorder.min.js"></script>');
    echo('<script src="js/vendor/Pizzicato.js"></script>');
    echo('<script src="js/vendor/wavesurfer-1.4.0.min.js"></script>');

    //Vue Components
    include("fileheader.php");
    include("modaloverlay.php");
    include("wave.php");
    include("envelope.php");
    include("filter.php");
    include("fx.php");
    include("export.php");

    //Analytics
    echo('<script>var analytics = false;</script>');

    // Production-only scripts
    if($_SERVER["REMOTE_ADDR"] != "127.0.0.1"){
        include_once("analytics.php");
        echo('<script src="js/vendor/vue.min.js"></script>');
        echo('<script src="js/bw.min.js"></script>');
    }

    // Development-only scripts
    else if($_SERVER["REMOTE_ADDR"] == "127.0.0.1"){
        //Vue JS Dev
        echo('<script src="js/vendor/vue.js"></script>');

        //Application
        echo('<script src="js/data/content.js"></script>');
        echo('<script src="js/util.js"></script>');
        echo('<script src="js/ampenvelope.js"></script>');
        echo('<script src="js/patches.js"></script>');

        //Components Scripts
        echo('<script src="js/fileheader.js"></script>');
        echo('<script src="js/modaloverlay.js"></script>');
        echo('<script src="js/wave.js"></script>');
        echo('<script src="js/envelope.js"></script>');
        echo('<script src="js/filter.js"></script>');
        echo('<script src="js/data/fx_data.js"></script>');
        echo('<script src="js/fx.js"></script>');
        echo('<script src="js/export.js"></script>');

        //VM
        echo('<script src="js/vm.js"></script>');
    }
?>

