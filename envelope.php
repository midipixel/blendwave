<?= '<script type="text/x-template" id="envelopePanel">' ?>

<section class="panelContent envelope" id="envelope" v-show="active">
    <?php include('fileHeader.php')?> 

    <h3>Envelope<em>Manipule o comportamento do som ao longo do tempo</em></h3>

    <div class="row amp">
        <div class="col-sm-6">
            <fieldset class="audioParams">
                <legend>{{ amp_envelope.name }}</legend>

                <template v-for="param in amp_envelope.params">
                    <label :for=param>{{ param.name }}</label>
                    <input type="range"
                           :min=param.min
                           v-model:value=param.value
                           :max=param.max
                           :step=param.step>
                    <output :value=param.value>{{param.value}}</output>
                </template>
            </fieldset>

            <fieldset :class="{audioParams:true, disabled: !amp_osc.active}" :disabled= !amp_osc.active>
                <legend>
                    <input type="checkbox" :checked=amp_osc.active @change=setAmpOSC />
                    {{ amp_osc.name }}
                </legend>

                <div class="params">
                    <template v-for="param in amp_osc.params">
                        <label :for=param>{{ param.name }}</label>
                        <input type="range"
                               :min=param.min
                               v-model:value=param.value
                               :max=param.max
                               :step=param.step>
                        <output :value=param.value>{{param.value}}</output>
                    </template>
                </div>
            </fieldset>
        </div>

        <div class="col-sm-6">
            <fieldset id="pitchEnvelope" class="audioParams">
                <legend>{{ pitch.name }}</legend>

                <template v-for="param in pitch.params">
                    <label :for=param>{{ param.name }}</label>
                    <input type="range"
                           :min=param.min
                           v-model:value=param.value
                           :max=param.max
                           :step=param.step>
                    <output :value=param.value>{{param.value}}</output>
                </template>
            </fieldset>

            <fieldset :class="{audioParams:true, disabled: !pitch_osc.active}" :disabled= !pitch_osc.active>
                <legend>
                    <input type="checkbox" :checked=pitch_osc.active @change='pitch_osc.active = !pitch_osc.active;' />
                    {{ pitch_osc.name }}
                </legend>

                <div class="params">
                    <template v-for="param in pitch_osc.params">
                        <label :for=param>{{ param.name }}</label>
                        <input type="range"
                               :min=param.min
                               v-model:value=param.value
                               :max=param.max
                               :step=param.step>
                        <output :value=param.value>{{param.value}}</output>
                    </template>
                </div>
            </fieldset>

            <!--fieldset id="vibrato" class="audioParams disabled">
                <legend><input type="checkbox" />Oscilar Pitch</legend>

                <label for="vibrato_speed">Speed</label>
                <input type="range" id="vibrato_speed" min="0" value="0" max="20" step="0.1" data-type="audioParam" disabled="true">
                <output for="vibrato_speed">0</output>

                <!--label for="pitch_osc_depth">Depth</label>
                <input type="range" id="pitch_osc_depth" min="1" value="0" max="100" step="1" data-type="audioParam">
                <output for="pitch_osc_depth">0</output>
            </fieldset-->
        </div>
    </div>
</section>

<?= '</script>'  ?>
