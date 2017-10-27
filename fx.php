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
                                    @click.prevent="toggleFX('<?= $fxSlot ?>')"

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
                                        :ga-event-action="fxSlots['<?= $fxSlot ?>'].selected"
                                        disabled="disabled">

                                        <option selected="selected" value="none">{{ content[$root.locale].none[0] }}</option>
                                        <template v-for="fx in fxSlots.<?= $fxSlot ?>.fxData">
                                            <option :value='fx.key'>{{ content[$root.locale][fx.key][0] }}</option>
                                        </template>
                                    </select>

                                    <p>
                                        {{ content[$root.locale][fxSlots.<?= $fxSlot ?>.selected][1] }}
                                    </p>
                                </div>
                            </div>

                            <template v-for="fx in fxSlots.<?= $fxSlot ?>.fxData">
                                <div v-if="fxSlots.<?= $fxSlot ?>.selected === fx.key"
                                     :class="{disabled: !fxSlots['<?= $fxSlot ?>'].active}">

                                    <div class="row fxSetup">
                                        <figure class="col-sm-4">
                                            <img :src="fx.img" alt="">
                                        </figure>

                                        <div class="col-sm-8" id="fxParams">
                                            <fieldset class="audioParams">
                                                <template v-for="param in fxSlots.<?= $fxSlot ?>.fxData[fxSlots.<?= $fxSlot ?>.selected].params">
                                                    <label :for="param">{{ content[$root.locale].params[param.id] }}</label>
                                                    <input type="range"
                                                            v-model.number="param.value"
                                                            :min="param.min"
                                                            :max="param.max"
                                                            :step="param.step"

                                                            ga-on="change"
                                                            :ga-event-category="'fxSlots.<?= $fxSlot ?>.selected' + ' param'"
                                                            :ga-event-action="param">

                                                    <output value="">
                                                        {{ param.value }}
                                                    </output>
                                                </template>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </template>
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


  



