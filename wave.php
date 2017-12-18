<?= '<script type="text/x-template" id="wavePanel">' ?>

<section class="panelContent" id="wave" v-show="active">

    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <section class="row">
        <div class="col loading">

        </div>
    </section>

    <section class="row">
        <div class="col-md-4">
            <div class="titleBox">
                <header>
                    <nav>
                        <a href="#" class="active">{{ content[$root.locale].library }}</a>
                        <!--a href="#">Your Files</a-->
                    </nav>
                </header>

                <nav class="main">
                    <ul class="sampleCategories">
                    <?php
                        $dir = scandir('samples');

                        // Remove dir paths
                        $library = array_slice($dir, 2);

                        // Print folder names
                        foreach ($library as $index => $category){
                            echo("<li @click='changeCategory' id='" . $category . "'>");
                                echo($category);
                            echo('</li>');
                        }
                    ?>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="col-md-8 titleBox samplesList">
            <div class="samplesHeader">
                <header>
                    <h4>{{ content[$root.locale].samplesList }}</h4>

                    <p class="tip">
                        {{ content[$root.locale].offsetTip }}
                    </p>

                </header>

                <section id="wavePreview" class="wavePreview">
                    <div class="loadingSample" v-show="loading">
                        <div class="content">
                            <img src="img/loading.gif" height="30">
                            {{ content[$root.locale].loading }}
                        </div>
                    </div>
                </section>
            </div>

            <div class="samplesBody">
                <?php
                    foreach ($library as $index => $category){
                        $catDir = scandir('samples/' . $category);
                        $catDir = array_slice($catDir, 2);

                        echo("<div class='fileList' v-if=\"category === '" . $category . "'\" id='list_" . $category . "'>");
                            // Establish max files per col, determine number of cols
                            $files_per_col = 10;

                            echo('<div class="subcol">');

                                foreach ($catDir as $fileindex => $filename){
                                    //Remove .mp4 extension
                                    $soundname = explode(".", $filename);

                                    echo('
                                        <a href="samples/'. $category . "/" . $filename .'" @click.prevent=changeFile ga-on="click" ga-event-category="wavePanel" ga-event-action="Change File">' . $soundname[0] . '</a>
                                    ');

                                    if($fileindex > 0 && ($fileindex + 1) % $files_per_col == 0){
                                        echo('</div>');
                                        echo('<div class="subcol">');
                                    }
                                }
                            echo('</div>');
                        echo('</div>');
                    }
                ?>
            </div>
        </div>
    </section>
</section>

<?= '</script>'  ?>
