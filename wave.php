<?= '<script type="text/x-template" id="wavePanel">' ?>

<section class="panelContent wavePanel" id="wave" v-show="active">

    <fileheader></fileheader>

    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <div class="row">
        <div class="loading">
            <p v-show="loading">
                <img src="img/loading.gif" height="30">
                {{ content[$root.locale].loading }}
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
                        {{ $root.file.name }}
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
