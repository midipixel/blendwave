<?php
    $locale = $_GET["locale"];
    echo('<script>');
        echo('var locale = "' . $locale . '"');
    echo('</script>');
?>
