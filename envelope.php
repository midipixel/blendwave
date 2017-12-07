<?= '<script type="text/x-template" id="envelopePanel">' ?>

<section class="panelContent envelope" id="envelope" v-show="active">
    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <div class="row">
        <div class="col-sm-6 amplitude">
            <div :class="{audioParams: true, disabled: !amp_envelope.active}" >
                <header>
                    <label for="amp_envelope_toggle" class="switch">
                        <input type="checkbox"
                               id="amp_envelope_toggle"
                               :checked=amp_envelope.active
                               @change="amp_envelope.active = !amp_envelope.active"
                               ga-on="change"
                               ga-event-category="ampEnvelope"
                               ga-event-action="toggle envelope"/>
                    </label>
                    <strong>{{ content[$root.locale].ampEnvelope }}</strong>
                    <span class="description">{{ content[$root.locale].ampEnvelopeDescription }}</span>
                </header>

                <fieldset class="main params" :disabled= !amp_envelope.active>
                    <template v-for="param in amp_envelope.params">
                        <label :for=param.name>{{ content[$root.locale][param.name] }}</label>
                        <div class="slider">
                            <input type="range"
                                   :min=param.min
                                   v-model:value=param.value
                                   :max=param.max
                                   :step=param.step
                                   ga-on="change"
                                   ga-event-category="ampEnvelope"
                                   :ga-event-action=param.name>
                            <output :value=param.value>{{param.value}}</output>
                        </div>
                    </template>
                </fieldset>
            </div>

            <div :class="{audioParams:true, disabled: !amp_osc.active}">
                <header>
                    <label for="amp_osc_toggle" class="switch">
                        <input type="checkbox"
                               id="amp_osc_toggle"
                               :checked=amp_osc.active
                               @change=setAmpOSC
                               ga-on="change"
                               ga-event-category="ampOSC"
                               ga-event-action="toggle oscillator"/>
                    </label>
                    <strong>{{ content[$root.locale].ampOSC }}</strong>
                    <span class="description">{{ content[$root.locale].ampOSCDescription }}</span>
                </header>

                <fieldset class="main params" :disabled= !amp_osc.active>
                    <template v-for="param in amp_osc.params">
                        <label :for=param>{{ content[$root.locale][param.name] }}</label>
                        <div class="slider">
                            <input type="range"
                                   :min=param.min
                                   v-model:value=param.value
                                   :max=param.max
                                   :step=param.step
                                   ga-on="change"
                                   ga-event-category="ampOSC"
                                   :ga-event-action=param.name>
                            <output :value=param.value>{{param.value}}</output>
                        </div>
                    </template>
                </fieldset>
            </div>
        </div>

        <div class="col-sm-6 pitch">
            <div :class="{audioParams:true, disabled: !pitch.active}">
                <header>
                    <label for="pitch_toggle" class="switch">
                        <input type="checkbox"
                               id="pitch_toggle"
                               :checked=pitch.active
                               @change="pitch.active = !pitch.active"

                               ga-on="change"
                               ga-event-category="pitch"
                               ga-event-action="toggle pitch shift"/>
                    </label>
                    <strong>{{ content[$root.locale].pitch }}</strong>
                    <span class="description">{{ content[$root.locale].pitchDescription }}</span>
                </header>

                <fieldset class="main params" :disabled= !pitch.active>
                    <template v-for="param in pitch.params">
                        <label :for=param>{{ content[$root.locale][param.name] }}</label>

                        <div class="slider">
                            <input type="range"
                                   :min=param.min
                                   v-model:value=param.value
                                   :max=param.max
                                   :step=param.step
                                   ga-on="change"
                                   ga-event-category="pitch"
                                   :ga-event-action=param.name>
                            <output :value=param.value>{{ param.value }}</output>
                        </div>
                    </template>
                </fieldset>
            </div>

            <div :class="{audioParams:true, disabled: !pitch_osc.active}">
                <header>
                    <label for="pitch_osc_toggle" class="switch">
                        <input type="checkbox"
                               id="pitch_osc_toggle"
                               :checked=pitch_osc.active
                               @change="pitch_osc.active = !pitch_osc.active;"

                               ga-on="change"
                               ga-event-category="pitchOSC"
                               ga-event-action="toggle oscillator"/>
                    </label>
                    <strong>{{ content[$root.locale].pitchOSC }}</strong>
                    <span class="description">{{ content[$root.locale].pitchOSCDescription }}</span>
                </header>

                <fieldset class="main params" :disabled= !pitch_osc.active>
                    <template v-for="param in pitch_osc.params">
                        <label :for=param>{{ content[$root.locale][param.name] }}</label>
                        <div class="slider">
                            <input type="range"
                                   :min=param.min
                                   v-model:value=param.value
                                   :max=param.max
                                   :step=param.step
                                   ga-on="change"
                                   ga-event-category="pitchOSC"
                                   :ga-event-action=param.name>
                            <output :value=param.value>{{ param.value }}</output>
                        </div>
                    </template>
                </fieldset>
            </div>
        </div>
    </div>
</section>

<?= '</script>'  ?>
