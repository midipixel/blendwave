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
                            <input type="radio" id="fx1_on">Liga</input>
                        </label>
                        <label for="fx1_on">
                            <input type="radio" id="fx1_off">Desliga</input>
                        </label>

                        <select id="fxSelect">
                            <?php
                                // Populates combo box with effects
                                foreach ($effects as $fx => $props) {
                                    $value = strtolower(str_replace(' ', '_', $fx));
                                    echo "<option value='{$value}'>{$fx}</option>";
                                }
                            ?>
                        </select>
                     </fieldset>
                </form>
            </div>
        </div>

        <div id="fxSetup">
            <!-- Template goes here-->
        </div>
    </section>


    <?php
        foreach ($effects as $fx => $props):
        // Write effect setup to HTML as a template, drawing parameters from the effects array
    ?>
        <?php $fxid = strtolower(str_replace(' ', '_', $fx)); ?>

        <!-- TODO: Rename this div to template -->
        <div id="<?= $fxid ?>">
            <div class="row">
                <div class="col-sm-12">
                    <?php
                        // Write effect description
                        foreach ($props as $prop => $value){
                            if ($prop == 'description'){
                                echo "<p>{$value}</p>";
                            }
                            break;
                        }
                    ?>
                </div>
            </div>

            <div class="row fxSetup">
                <figure class="col-sm-4">
                    <img src="img/<?= $fxid ?>.png" alt="">
                </figure>

                <div class="col-sm-8" id="fxParams">
                    <fieldset class="audioParams">
                        <?php
                            //Write the effects parameters to form fields
                            foreach ($props as $prop => $propType): ?>
                            <?php if ($prop == 'params'): ?>
                                <?php foreach ($propType as $param => $value): ?>
                                    <label for="<?= $param ?>"><?= $param ?></label>
                                    <input type="range" id="" min="" value="" max="" step="" data-type="audioParam">
                                    <output for=""></output>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </fieldset>
                </div>
            </div>
        </div>
    <?php endforeach; ?>

</section>