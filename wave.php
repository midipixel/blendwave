<?= '<script type="text/x-template" id="wavePanel">' ?>

<section class="panelContent wavePanel" id="wave" v-show="active">

    <fileheader></fileheader>

    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <section class="row">
        <div class="col loading">
            <p v-show="loading">
                <img src="img/loading.gif" height="30">
                {{ content[$root.locale].loading }}
            </p>
        </div>
    </section>

    <section class="row">
        <div class="col-md-4">
            <nav>
                <a href="#">Library</a>
                <a href="#">Your Files</a>
            </nav>

            <ul class="categoryList">
                <li>Animals</li>
                <li>Ambiences</li>
                <li>Cartoon</li>
                <li>Doors and Gates</li>
                <li>Elements</li>
                <li>Explosions</li>
                <li>Foley</li>
                <li>Machinery</li>
                <li>Metallic</li>
                <li>Retro</li>
                <li>User Interface</li>
                <li>Vehicles</li>
                <li>Weapons</li>
            </ul>
        </div>

        <div class="col-md-8">
            <section id="wavePreview"></section>
                         
            <ul class=" row fileList">
                <li class="active col-md-4 ">
                    <a href="samples/sine.wav"
                        @click.prevent=changeFile

                        ga-on="click"
                        ga-event-category="wavePanel"
                        ga-event-action="Change File">
                        sine.wave
                    </a>
                </li>
                <?php
                    $dir    = 'samples';
                    $files = scandir($dir);

                    foreach ($files as $fileindex => $filename){
                        if ($fileindex > 1 && $filename != 'sine.wav'){
                            echo('
                            <li class="col-md-4">
                                <a href="samples/'. $filename .'" @click.prevent=changeFile ga-on="click" ga-event-category="wavePanel" ga-event-action="Change File">' . $filename . '</a>
                            </li>');
                        }
                    }
                ?>
            </ul>
        </div>
    </section>




</section>

<?= '</script>'  ?>
