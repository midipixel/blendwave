<div class="preLoader" id="preLoader">
    <img src="img/bw_logo.svg" alt="Blendwave">
    <p>
        <?php
            if(empty($_GET)){
                echo('Loading. Please wait!');
            }
            else{
                echo('Carregando. Por favor, aguarde!');
            }
        ?>
    </p>
</div>
