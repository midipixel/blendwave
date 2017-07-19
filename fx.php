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

                            <div class="fxControls">
                                <button class="toggleFX" v-on:click.prevent="toggleFX(<?= $fxSlot ?>)">{{ ui.fxButtonText }}</button>

                                <div :class="{fxParams: true, disabled: !<?= $fxSlot . '.active' ?>}">
                                    <select v-model="<?= $fxSlot . '.selected' ?>" v-on:change="setFX(<?= $fxSlot ?>)" disabled="disabled">
                                        <option selected="selected" value="none">None</option>
                                        <template v-for="fx in fxList">
                                            <option :value='fx.name'>{{ fx.name }}</option>"
                                        </template>
                                    </select>

                                    <p v-for="fx in fxList">
                                        <span v-if="<?= $fxSlot . '.selected' ?> == fx.name">{{ fx.description }}</span>
                                    </p>
                                </div>
                            </div>

                            <section :class="{disabled: !<?= $fxSlot . '.active' ?>}">
                                <template v-for="fx in fxList">
                                    <effect :id=fx.name.toLowerCase() v-if="<?= $fxSlot . '.selected'?> == fx.name" :class=fx.name.toLowerCase()></effect>
                                </template>
                            </section>
                         </fieldset>
                    </form>
                </div>
            </div>
        </section>
    <?php endfor; ?>
</section>

