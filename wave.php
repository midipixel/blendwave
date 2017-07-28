<?= '<script type="text/x-template" id="wavePanel">' ?>

<section class="panelContent" data-panelname="wave" id="wave">
    <?php include("fileHeader.php"); ?>

    <h3>Fonte Sonora <em>Escolha um som para servir de base</em></h3>

    <div class="row">
        <div class="col-sm-4 fileList" id="fileList">
            <ul>
                <li class="active"><a href="samples/sine.wav">Sine</a></li>
                <?php
                    $dir    = 'samples';
                    $files = scandir($dir);

                    foreach ($files as $fileindex => $filename){
                        if ($fileindex > 1 && $filename != 'sine.wav'){
                            echo('<li><a href="samples/'. $filename .'">' . $filename . '</a></li>');
                        }
                    }
                ?>
            </ul>

            <!--input type="file" id="wavefile" disabled="disabled"></input-->
        </div>

        <div class="col-sm-8">

        </div>
    </div>
</section>

<?= '</script>'  ?>
