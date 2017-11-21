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
            <div class="titleBox">
                <header>
                    <nav>
                        <a href="#" class="active">Library</a>
                        <a href="#">Your Files</a>
                    </nav>
                </header>

                <div class="main">
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
            </div>

        </div>

        <div class="col-md-8 titleBox samplesList">
            <header>
                <h4>Samples List</h4>
                <label>
                    <input type="checkbox"> Show Waveform Preview
                </label>
            </header>

            <section id="wavePreview" class="wavePreview"></section>

            <div class="fileContainer">
                <div class="fileList">
                    <?php
                        $dir = scandir('samples');

                        // Remove dir paths
                        $files = array_slice($dir, 2);

                        // Establish max files per col, determine number of cols
                        $files_per_col = 12;

                        echo('<div class="subcol">');

                            foreach ($files as $fileindex => $filename){
                                if ($filename != 'sine.wav'){
                                    echo('
                                        <a href="samples/'. $filename .'" @click.prevent=changeFile ga-on="click" ga-event-category="wavePanel" ga-event-action="Change File">' . $filename . '</a>
                                    ');
                                }
                                if($fileindex > 0 && $fileindex % $files_per_col == 0){
                                    echo('</div>');
                                    echo('<div class="subcol">');
                                }
                            }

                        echo ('</div>');
                    ?>
                </div>
            </div>
        </div>
    </section>




</section>

<?= '</script>'  ?>
