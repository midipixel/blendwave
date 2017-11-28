<?= '<script type="text/x-template" id="envelopePanel">' ?>

<section class="panelContent envelope" id="envelope" v-show="active">
    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <div class="row">
        <div class="col-sm-6 amplitude">
            <fieldset  :class="{audioParams:true, disabled: !amp_envelope.active}" :disabled= !amp_envelope.active>
                <legend>
                    <label for="amp_envelope_toggle">
                        <input type="checkbox"
                               id="amp_envelope_toggle"
                               :checked=amp_envelope.active
                               @change="amp_envelope.active = !amp_envelope.active"
                               ga-on="change"
                               ga-event-category="ampEnvelope"
                               ga-event-action="toggle envelope"/>
                    </label>

                    {{ content[$root.locale].ampEnvelope }}
                </legend>

                <div class="main params">
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
                </div>
            </fieldset>

            <fieldset :class="{audioParams:true, disabled: !amp_osc.active}" :disabled= !amp_osc.active>
                <legend>
                    <label for="amp_osc_toggle">
                        <input type="checkbox"
                               id="amp_osc_toggle"
                               :checked=amp_osc.active
                               @change=setAmpOSC
                               ga-on="change"
                               ga-event-category="ampOSC"
                               ga-event-action="toggle oscillator"/>
                    </label>
                    {{ content[$root.locale].ampOSC }}
                </legend>

                <div class="main params">
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
                </div>
            </fieldset>
        </div>

        <div class="col-sm-6 pitch">
            <fieldset id="pitchEnvelope" :class="{audioParams:true, disabled: !pitch.active}" :disabled= !pitch.active>
                <legend>
                    <label for="pitch_toggle">
                    <input type="checkbox"
                           id="pitch_toggle"
                           :checked=pitch.active
                           @change="pitch.active = !pitch.active"

                           ga-on="change"
                           ga-event-category="pitch"
                           ga-event-action="toggle pitch shift"/>
                    </label>
                    {{ content[$root.locale].pitch }}
                </legend>

                <div class="main params">
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
                </div>
            </fieldset>

            <fieldset :class="{audioParams:true, disabled: !pitch_osc.active}" :disabled= !pitch_osc.active>
                <legend>
                    <label for="pitch_osc_toggle">
                        <input type="checkbox"
                               id="pitch_osc_toggle"
                               :checked=pitch_osc.active
                               @change="pitch_osc.active = !pitch_osc.active;"

                               ga-on="change"
                               ga-event-category="pitchOSC"
                               ga-event-action="toggle oscillator"/>
                    </label>
                    {{ content[$root.locale].pitchOSC }}
                </legend>

                <div class="main params">
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
                </div>
            </fieldset>
        </div>
    </div>
</section>

<?= '</script>'  ?>
