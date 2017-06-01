<?php include('vue_fxTemplate.php')?>

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
                                <select v-model="<?= $fxNum . '.selected' ?>">
                                    <template v-for="fx in fxList">
                                        <option :value='fx.name'>{{ fx.name }}</option>"
                                    </template>
                                </select>

                                <p v-for="fx in fxList">
                                    <span v-if="<?= $fxNum . '.selected' ?> == fx.name">{{ fx.description }}</span>
                                </p>
                            </div>
                         </fieldset>
                    </form>
                </div>
            </div>

            <template v-for="fx in fxList">
                <div :is=fx.name v-if="<?= $fxNum . '.selected' ?> == fx.name"></div>
            </template>

        </section>
    <?php endfor; ?>
</section>

