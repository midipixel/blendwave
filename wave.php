<?= '<script type="text/x-template" id="wavePanel">' ?>

<section class="panelContent wavePanel" id="wave" v-show="active">
    <?php include("fileHeader.php"); ?>

    <h3>Fonte Sonora <em>Escolha um som para servir de base</em></h3>

    <p class="loading" v-if="loading">Loading!</p>

    <div class="row">
        <div class="col-sm-4 fileList" id="fileList">
            <ul>
                <li class="active">
                    <a href="samples/sine.wav" @click.prevent=changeFile>Sine</a>
                </li>
                <?php
                    $dir    = 'samples';
                    $files = scandir($dir);

                    foreach ($files as $fileindex => $filename){
                        if ($fileindex > 1 && $filename != 'sine.wav'){
                            echo('<li><a href="samples/'. $filename .'" @click.prevent=changeFile>' . $filename . '</a></li>');
                        }
                    }
                ?>
            </ul>
        </div>
    </div>
</section>

<?= '</script>'  ?>
