<?php require 'data/fx_data.php'; ?>

<section class="panelContent" data-panelname="fx" id="fx">
    <?php include('fileHeader.php')?>

    <h3>Efeitos <em>Experimente com seu som utilizando efeitos DSP!</em></h3>

    <section id="fx1">
        <div class="row">
            <div class="col-sm-12">
                <form action="" autocomplete="off">
                    <fieldset>
                        <legend>Efeito 1</legend>

                        <label for="fx1_on">
                            <input type="radio" id="fx1_on" name="fxSwitch">Liga</input>
                        </label>

                        <label for="fx1_on">
                            <input type="radio" id="fx1_off" name="fxSwitch">Desliga</input>
                        </label>

                        <div class="fxSelect">
                            <select>
                                <?php
                                    // Populates combo box with effects
                                    foreach ($effects as $fx => $props) {
                                        $value = strtolower(str_replace(' ', '_', $fx));
                                        echo "<option value='{$value}'>{$fx}</option>";
                                    }
                                ?>
                            </select>

                            <p>Description</p>
                        </div>
                     </fieldset>
                </form>
            </div>
        </div>

        <div id="row fxSetup">
            <!-- Template goes here-->
        </div>
    </section>


    <?php foreach ($effects as $fx => $props):
    // Write effect setup to HTML as a template, drawing parameters from the effects array
    ?>
        <?php $fxid = strtolower(str_replace(' ', '_', $fx)); ?>

        <!-- TODO: Rename this div to template -->
        <div id="<?= $fxid ?>">
            <div class="row">
                <div class="col-sm-12">
                    <?= ($props["description"]);?>
                </div>
            </div>

            <div class="row fxSetup">
                <figure class="col-sm-4">
                    <img src="img/<?= $fxid ?>.png" alt="">
                </figure>

                <div class="col-sm-8" id="fxParams">
                    <fieldset class="audioParams">
                        <?php foreach ($props["params"] as $param => $value):
                        //Write parameters for the effect
                        ?>
                            <label for="<?= $param ?>"><?= $param ?></label>
                            <input type="range" id="" value="<?= $value ?>" min="" max="" step="" data-type="audioParam">
                            <output for=""><?= $value ?></output>
                        <?php endforeach; ?>
                    </fieldset>
                </div>
            </div>
        </div>
    <?php endforeach; ?>

</section>