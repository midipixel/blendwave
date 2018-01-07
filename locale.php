<?php
    echo('<script>');
        if(empty($_GET)){
            echo('var bwLocale = "en"');
        }
        else{
            $locale = $_GET["locale"];
            echo('var bwLocale = "' . $locale . '"');
        }
    echo('</script>');
?>
