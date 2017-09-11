<?= '<script type="text/x-template" id="wavePanel">' ?>

<section class="panelContent wavePanel" id="wave" v-show="active">

    <?php include("fileHeader.php"); ?>

    <h3>Fonte Sonora <em>Escolha um som para servir de base</em></h3>

    <div class="row">
        <div class="loading">
            <p v-show="loading">
                <img src="img/loading.gif" height="30">
                Por Favor, aguarde. Carregando Som
            </p>
        </div>

        <div class="fileList" id="fileList">
            <ul>
                <li class="active col-sm-4 ">
                    <a href="samples/sine.wav"
                        @click.prevent=changeFile
                        ga-on="click"
                        ga-event-category="wavePanel"
                        ga-event-action="Change File">
                        Sine
                    </a>
                </li>
                <?php
                    $dir    = 'samples';
                    $files = scandir($dir);

                    foreach ($files as $fileindex => $filename){
                        if ($fileindex > 1 && $filename != 'sine.wav'){
                            echo('
                            <li class="col-sm-4">
                                <a href="samples/'. $filename .'" @click.prevent=changeFile ga-on="click" ga-event-category="wavePanel" ga-event-action="Change File">' . $filename . '</a>
                            </li>');
                        }
                    }
                ?>
            </ul>
        </div>
    </div>
</section>

<?= '</script>'  ?>
