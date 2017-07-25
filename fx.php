<?= '<script type="text/x-template" id="fxPanel">' ?>

<section class="panelContent" data-panelname="fx" id="fx">
    <?php include('fileHeader.php')?>

    <h3>Efeitos <em>Experimente com seu som utilizando efeitos DSP!</em></h3>

    <?php
        $fxDataJSON = file_get_contents('js/data/fx_data.json');
        $fxData = json_decode($fxDataJSON, true); 

        $fxQuantity = 2;
        for($i=1; $i <= $fxQuantity; $i++ ):
    ?>
        <?php $fxSlot = 'fxSlot' . $i; ?>

        <div id="<?= $fxSlot ?>" class="effect">
            <div class="row">
                <div class="col-sm-12">
                    <form action="" autocomplete="off">
                        <fieldset>
                            <legend>Slot <?= $i ?></legend>

                            <div class="fxControls">
                                <button class="toggleFX">off</button>

                                <div class="fxParameters">
                                    <select v-model="fxSlots['<?= $fxSlot ?>'].selected" v-on:change="setFX('<?= $fxSlot ?>')" _disabled="disabled">
                                        <option selected="selected" value="none">None</option>
                                        <?php foreach ($fxData as $fx => $props): ?>
                                            <option value='<?= $fx ?>'><?= $props["name"] ?></option>
                                        <?php endforeach; ?>
                                    </select>

                                    <p _v-for="fx in fxList">
                                        <span _v-if="fxSlots['<?= $fxSlot ?>'].selected == fx.name">fx.description</span>
                                    </p>
                                </div>
                            </div>

                            <?php 
                                foreach ($fxData as $fx => $props):
                            ?>
                                <div id="<?= $fx ?>" v-show="fxSlots['<?= $fxSlot ?>'].selected == '<?= $fx ?>'">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <?= ($props["description"]);?>
                                        </div>
                                    </div>

                                    <div class="row fxSetup">
                                        <figure class="col-sm-4">
                                            <img src="img/<?= $fx ?>.png" alt="">
                                        </figure>

                                        <div class="col-sm-8" id="fxParams">
                                            <fieldset class="audioParams">
                                                <?php 
                                                    foreach ($props["params"] as $param => $values):
                                                ?>
                                                    <label for="<?= param ?>"><?= $param ?></label>
                                                    <input type="range" id="" 
                                                           v-model="fxSlots['<?= $fxSlot ?>'].params['<?= $param ?>']" 
                                                           v-on:change="teste()" 
                                                           min="<?= $values['min'] ?>" max="<?= $values['max'] ?>" 
                                                           step="<?= $values['step'] ?>" 
                                                           data-type="audioParam">
                                                    <output for=""><?= $values["value"] ?></output>
                                                <?php 
                                                    endforeach;
                                                ?>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            <?php 
                                endforeach; 
                            ?>                            
                         </fieldset>
                    </form>
                </div>
            </div>
        </div>
    <?php 
        endfor; 
    ?>
</section>

<?= '</script>'  ?>

<fxpanel ref="fxPanel"></fxpanel>
  



