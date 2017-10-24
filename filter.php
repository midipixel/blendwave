<?= '<script type="text/x-template" id="filterPanel">' ?>

<section class="panelContent" id="filter" v-show="active">
    <?php include('fileHeader.php')?> 

    <h3>{{ content.<?= $locale ?>.title }} <em> {{ content.<?= $locale ?>.subtitle }}</em></h3>

    <div class="row">
        <form action="" autocomplete="off">
            <div class="col-sm-6">
                <h5><label for="filter">{{ content.<?= $locale ?>.filterType }}</label></h5>

                <div class="dspType filterType">
                    <select
                        id="filter"
                        v-model="selected"
                        @change="set"
                        @keydown="ignoreKeyboard"

                        ga-on="change"
                        ga-event-category="filterType"
                        ga-event-action="choose filter type">

                        <option value="none" selected="selected">{{ content.<?= $locale ?>.none }}</option>
                        <option value="lowpass">{{ content.<?= $locale ?>.lowpass[0] }}</option>
                        <option value="highpass">{{ content.<?= $locale ?>.highpass[0] }}</option>
                    </select>
                    <p>{{ selected != 'none' ? content.<?= $locale ?>[selected][1] : ' ' }}</p>
                </div>

                <div :class="'dspSetup filterSetup' + ' ' + this.selected" >
                    <figure>
                        <img :src="'img/filter_'+ this.selected +'.png'" :alt="this.selected.name">
                    </figure>

                    <fieldset class="audioParams" :disabled="this.selected == 'none'">
                        <label for="filter_cutoff">{{ content.<?= $locale ?>.cutoff }}</label>

                        <!-- Low Pass -->
                        <template v-if="selected === 'lowpass'">
                            <input
                                type="range"
                                :min="filter.lowpass.params.cutoff.min"
                                :max="filter.lowpass.params.cutoff.max"
                                :step="filter.lowpass.params.cutoff.step"
                                v-model.number="filter.lowpass.params.cutoff.value"

                                ga-on="change"
                                ga-event-category="filterCutoff"
                                ga-event-action="LP Cutoff">

                                <output for="filter_cutoff">{{ filter.lowpass.params.cutoff.value }}</output>
                        </template>

                        <!-- High Pass -->
                        <template v-else-if="selected === 'highpass'">
                            <input
                                type="range"
                                :min="filter.highpass.params.cutoff.min"
                                :max="filter.highpass.params.cutoff.max"
                                :step="filter.highpass.params.cutoff.step"
                                v-model.number="filter.highpass.params.cutoff.value"

                                ga-on="change"
                                ga-event-category="filterCutoff"
                                ga-event-action="HP Cutoff">

                                <output for="filter_cutoff">{{ filter.highpass.params.cutoff.value }}</output>
                        </template>

                        <!-- None: Dummy Slider -->
                        <template v-else-if="selected === 'none'">
                            <input type="range" value="0">
                            <output>{{ filter.highpass.params.cutoff.value }}</output>
                        </template>
                    </fieldset>
                </div>
            </div>

            <div class="col-sm-6">
                <fieldset id="filter_osc" :class="{audioParams:true, disabled: !osc.active}" :disabled="!osc.active">
                    <legend>
                        <input
                            type="checkbox"
                            :checked=osc.active
                            @change='osc.active = !osc.active;'
                            ga-on="change"
                            ga-event-category="filterOSC"
                            ga-event-action="toggle filter oscillator"/>
                        {{ content.<?= $locale ?>.oscillateFilter }}
                    </legend>

                    <label for="filterOSC_speed">{{ content.<?= $locale ?>.speed }}</label>
                    <input
                        type="range"
                        :min="osc.params.speed.min"
                        :max="osc.params.speed.max"
                        :step="osc.params.speed.step"
                        v-model.number="osc.params.speed.value"

                        ga-on="change"
                        ga-event-category="filterOSC"
                        ga-event-action="speed">
                    <output for="filterOSC_speed">{{ osc.params.speed.value }}</output>

                    <label for="filterOSC_depth">{{ content.<?= $locale ?>.depth }}</label>
                    <input
                        type="range"
                        :min="osc.params.amount.min"
                        :max="osc.params.amount.max"
                        :step="osc.params.amount.step"
                        v-model.number="osc.params.amount.value"

                        ga-on="change"
                        ga-event-category="filterOSC"
                        ga-event-action="depth">
                    <output for="filterOSC_depth">{{ osc.params.amount.value }}</output>
                </fieldset>
            </div>
        </form>
    </div>
</section>

<?= '</script>'  ?>
