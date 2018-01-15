<div class="preLoader" id="preLoader">
    <img src="img/bw_logo.svg" alt="Blendwave">
    <p>
        <?php
            if(!isset($_GET["locale"]) || $_GET["locale"] === 'en' ){
                echo('Loading. Please wait!');
            }
            else{
                echo('Carregando. Por favor, aguarde!');
            }
        ?>
    </p>
</div>
