<?php
    $locale = null;

    echo('<script>');
        if(!isset($_GET["locale"]) || $_GET["locale"] === 'en' ){
            echo('var bwLocale = "en"');
        }
        else{
            $locale = $_GET["locale"];
            echo('var bwLocale = "' . $locale . '"');
        }
    echo('</script>');
?>
