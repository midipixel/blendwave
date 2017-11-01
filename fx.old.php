<?= '<script type="text/x-template" id="fxPanel">' ?>

<section class="panelContent" id="fx" v-show="active">
    <fileheader></fileheader>

    <h3>{{ content[$root.locale].title }} <em>{{ content[$root.locale].title }}</em></h3>

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
                                <button
                                    class="toggleFX"
                                    v-on:click.prevent="toggleFX('<?= $fxSlot ?>')"
                                    ga-on="click"
                                    ga-event-category="<?= $fxSlot ?>"
                                    ga-event-action="toggle FX">
                                    {{ this.fxSlots.<?= $fxSlot ?>.fxButtonText }}
                                </button>

                                <div :class="{fxParameters: true, disabled: !fxSlots['<?= $fxSlot ?>'].active}">
                                    <select
                                        v-model="fxSlots['<?= $fxSlot ?>'].selected"
                                        v-on:change="setFX('<?= $fxSlot ?>')"
                                        ga-on="change"
                                        ga-event-category="<?= $fxSlot ?>"
                                        :ga-event-action="fxSlots['<?= $fxSlot ?>'].selected">
                                        disabled="disabled">

                                        <option selected="selected" value="none">None</option>
                                        <?php
                                            foreach ($fxData as $fx => $props):
                                        ?>
                                            <option value='<?= $fx ?>'>{{ content[$root.locale].<?= $fx ?>[0] }}</option>
                                        <?php
                                            endforeach;
                                        ?>
                                    </select>

                                    <p>
                                        <?php
                                            foreach ($fxData as $fx => $props):
                                        ?>
                                            <span v-if="fxSlots['<?= $fxSlot ?>'].selected == '<?= $fx ?>'">
                                            {{ content[$root.locale].<?= $fx ?>[1] }}
                                            </span>
                                        <?php
                                            endforeach;
                                        ?>
                                    </p>
                                </div>
                            </div>

                            <?php
                                foreach ($fxData as $fx => $props):
                            ?>
                                <div id="<?= $fx ?>"
                                     v-show="fxSlots['<?= $fxSlot ?>'].selected == '<?= $fx ?>'"
                                     :class="{disabled: !fxSlots['<?= $fxSlot ?>'].active}">

                                    <div class="row fxSetup">
                                        <figure class="col-sm-4">
                                            <img src="img/<?= $fx ?>.png" alt="">
                                        </figure>

                                        <div class="col-sm-8" id="fxParams">
                                            <fieldset class="audioParams">
                                                <?php
                                                    foreach ($props["params"] as $param => $values):
                                                ?>
                                                    <label for="<?= param ?>">{{ content[$root.locale].params.<?= $param ?> }}</label>
                                                    <input type="range"
                                                            v-model.number="fxSlots.<?= $fxSlot ?>.params.<?= $param ?>"
                                                            min="<?= $values['min'] ?>"
                                                            max="<?= $values['max'] ?>"
                                                            step="<?= $values['step'] ?>"

                                                            ga-on="change"
                                                            ga-event-category="<?= $fx ?> param"
                                                            ga-event-action="<?= $param ?>"
                                                           >
                                                    <output :value="fxSlots.<?= $fxSlot ?>.params.<?= $param ?>">
                                                        {{ fxSlots.<?= $fxSlot ?>.params.<?= $param ?> }}
                                                    </output>
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





