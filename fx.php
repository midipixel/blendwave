<?php require('templates/vue_effect.php')?>

<section class="panelContent" data-panelname="fx" id="fx">
    <?php include('fileHeader.php')?>

    <h3>Efeitos <em>Experimente com seu som utilizando efeitos DSP!</em></h3>

    <?php
        $fxQuantity = 1;
        for($i=1; $i <= $fxQuantity; $i++ ):
    ?>
        <?php $fxSlot = 'fxSlot' . $i; ?>

        <section id="<?= $fxSlot ?>" class="effect">
            <div class="row">
                <div class="col-sm-12">
                    <form action="" autocomplete="off">
                        <fieldset>
                            <legend>Efeito <?= $i ?></legend>

                            <label for="<?= $fxSlot . '_on' ?>">
                                <input type="radio" name="<?= $fxSlot . 'switch' ?>" id="<?= $fxSlot . '_on' ?>" v-on:click = 'activateFX(<?= $fxSlot ?>, true)' :checked="<?= $fxSlot . '.active' ?>">Liga</input>
                            </label>

                            <label for="<?= $fxSlot . '_off' ?>">
                                <input type="radio" name="<?= $fxSlot . 'switch' ?>" id="<?= $fxSlot . '_off' ?>" v-on:click = 'activateFX(<?= $fxSlot ?>, false)' :checked="!<?= $fxSlot . '.active' ?>">Desliga</input>
                            </label>

                            <div class="fxSelect">
                                <select v-model="<?= $fxSlot . '.selected' ?>" v-on:change='setFX(<?= $fxSlot ?>, <?= $fxSlot . '.selected' ?>)'>
                                    <option value="none">Nenhum</option>
                                    <template v-for="fx in fxList">
                                        <option :value='fx.name'>{{ fx.name }}</option>"
                                    </template>
                                </select>

                                <p v-for="fx in fxList">
                                    <span v-if="<?= $fxSlot . '.selected' ?> == fx.name">{{ fx.description }}</span>
                                </p>
                            </div>
                         </fieldset>
                    </form>
                </div>
            </div>

            <template v-for="fx in fxList">
                <effect :id=fx.id v-if="<?= $fxSlot . '.selected'?> == fx.name" :class=fx.id></effect>
            </template>

        </section>
    <?php endfor; ?>
</section>

