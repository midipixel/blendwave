<?php require 'data/fx_data.php'; ?>

<section class="panelContent" data-panelname="fx" id="fx">
    <?php include('fileHeader.php')?>

    <h3>Efeitos <em>Experimente com seu som utilizando efeitos DSP!</em></h3>

    <?php
        $fxQuantity = 2;
        for($i=1; $i <= $fxQuantity; $i++ ):
    ?>

    <?php $fxNum = 'fx' . $i; ?>
    <section id="<?= $fxNum ?>" class="effect">
        <div class="row">
            <div class="col-sm-12">
                <form action="" autocomplete="off">
                    <fieldset>
                        <legend>Efeito <?= $i ?></legend>

                        <label for="fx1_on">
                            <input type="radio" id="fx1_on" name="fxSwitch">Liga</input>
                        </label>

                        <label for="fx1_on">
                            <input type="radio" id="fx1_off" name="fxSwitch">Desliga</input>
                        </label>

                        <div class="fxSelect">
                            <select v-model="<?= $fxNum . '.active' ?>">
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

        <?php foreach ($effects as $fx => $props):
        // Write effect setup to HTML as a template, drawing parameters from the effects array
        ?>
            <?php $fxid = strtolower(str_replace(' ', '_', $fx)); ?>

            <template v-if="<?= $fxNum . '.active' ?> == '<?= $fxid ?>'">
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
            </template>
        <?php endforeach; ?>
    </section>
    <?php endfor; ?>
</section>