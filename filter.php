<?= '<script type="text/x-template" id="filterPanel">' ?>

<section class="panelContent" id="filter" v-show="active">
    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <form class="row" action="" autocomplete="off">
        <div class="col-sm-6">
            <div class="audioParams filterType">
                <header>
                    {{ content[$root.locale].filterType }}
                    <span class="description">{{ content[$root.locale].filterTypeDescription }}</span>
                </header>

                <div class="main">
                    <div class="filterSelect">
                        <select
                            id="filter"
                            v-model="selected"
                            @change="set"
                            @keydown="ignoreKeyboard"

                            ga-on="click"
                            ga-event-category="filterType"
                            ga-event-action="choose filter type">

                            <option value="none" selected="selected">{{ content[$root.locale].none }}</option>
                            <option value="lowpass">{{ content[$root.locale].lowpass[0] }}</option>
                            <option value="highpass">{{ content[$root.locale].highpass[0] }}</option>
                        </select>
                        <p class="description">{{ selected != 'none' ? content[$root.locale][selected][1] : ' ' }}</p>
                    </div>

                    <fieldset class="params" :class="this.selected" >
                        <label for="filter_cutoff">{{ content[$root.locale].cutoff }}</label>

                        <!-- Low Pass -->
                        <div class="slider" v-if="selected === 'lowpass'">
                            <input
                                type="range"
                                :min="filter.lowpass.params.cutoff.min"
                                :max="filter.lowpass.params.cutoff.max"
                                :step="filter.lowpass.params.cutoff.step"
                                v-model.number="filter.lowpass.params.cutoff.value"
                                :disabled="this.selected == 'none'"

                                @change="$root.gaSend('event', { eventCategory: 'filterCutoff', eventAction: 'LP cutoff',})"/>

                                <output for="filter_cutoff">{{ filter.lowpass.params.cutoff.value }}</output>
                        </div>

                        <!-- High Pass -->
                        <div class="slider" v-else-if="selected === 'highpass'">
                            <input
                                type="range"
                                :min="filter.highpass.params.cutoff.min"
                                :max="filter.highpass.params.cutoff.max"
                                :step="filter.highpass.params.cutoff.step"
                                v-model.number="filter.highpass.params.cutoff.value"
                                :disabled="this.selected == 'none'"

                                @change="$root.gaSend('event', { eventCategory: 'filterCutoff', eventAction: 'HP cutoff',})"/>

                                <output for="filter_cutoff">{{ filter.highpass.params.cutoff.value }}</output>
                        </div>

                        <!-- None: Dummy Slider -->
                        <div class="slider" v-else-if="selected === 'none'">
                            <input type="range" value="0" disabled="true">
                            <output>{{ filter.highpass.params.cutoff.value }}</output>
                        </div>

                        <figure>
                            <img v-if="this.selected != 'none'" :src="'img/filter_'+ this.selected +'.png'" :alt="this.selected.name">
                        </figure>
                    </fieldset>
                </div>
            </div>
        </div>

        <div class="col-sm-6">
            <div id="filter_osc" :class="{audioParams:true, disabled: !osc.active}">
                <!-- Filter OSC Toggle -->
                <header>
                    <label class="switch" :class="{disabled: this.selected === 'none'}" :title="disabledWarning">
                        <input
                            type="checkbox"
                            :checked="osc.active"
                            @change="osc.active = !osc.active;"
                            :disabled="this.selected === 'none'"

                            ga-on="click"
                            ga-event-category="filterOSC"
                            ga-event-action="toggle filter oscillator"/>
                    </label>
                    <strong>{{ content[$root.locale].oscillateFilter }}</strong>
                    <span class="description">{{ content[$root.locale].oscillateFilterDescription }}</span>
                </header>

                <!-- Filter OSC Sliders -->
                <fieldset class="main params" :disabled="!osc.active">
                    <label for="filterOSC_speed">{{ content[$root.locale].speed }}</label>

                    <!-- Speed -->
                    <div class="slider">
                        <input
                            type="range"
                            :min="osc.params.speed.min"
                            :max="osc.params.speed.max"
                            :step="osc.params.speed.step"
                            v-model.number="osc.params.speed.value"

                            @change="$root.gaSend('event', { eventCategory: 'filterOSC', eventAction: 'speed',})"/>
                        <output for="filterOSC_speed">{{ osc.params.speed.value }}</output>
                    </div>

                    <label for="filterOSC_depth">{{ content[$root.locale].depth }}</label>

                    <!-- Amount -->
                    <div class="slider">
                        <input
                            type="range"
                            :min="osc.params.amount.min"
                            :max="osc.params.amount.max"
                            :step="osc.params.amount.step"
                            v-model.number="osc.params.amount.value"

                            @change="$root.gaSend('event', { eventCategory: 'filterOSC', eventAction: 'depth',})"/>
                        <output for="filterOSC_depth">{{ osc.params.amount.value }}</output>
                    </div>
                </fieldset>
            </div>
        </div>
    </form>
</section>

<?= '</script>'  ?>
