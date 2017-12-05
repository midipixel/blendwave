<?= '<script type="text/x-template" id="exportPanel">' ?>
<section class="panelContent" id="export" v-show="active">
    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <div class="mixer">
        <div class="strip">
            <div class="titleBox">
                <header>{{ content[$root.locale].envelopeStrip }}</header>

                <div :class="{main: true, disabled: !mixer.envelopePanel.active}">
                    <figure>
                        <?php echo file_get_contents("img/ic_envelope.svg"); ?>
                    </figure>

                    <label for="envelopeToggle" class="switch">
                        <input type="checkbox"
                               id="envelopeToggle"
                               @change="togglePanel('envelopePanel')"
                               :checked="mixer.envelopePanel.active"

                               ga-on="change"
                               ga-event-category="exportPanel"
                               ga-event-action="toggle Envelope"
                        >
                    </label>

                    <p class="toggleLabel">
                        <span v-if="mixer.envelopePanel.active">{{ content[$root.locale].toggleOn }}</span>
                        <span v-else>{{ content[$root.locale].toggleOff }}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="strip">
            <div class="titleBox">
                <header>{{ content[$root.locale].filterStrip }}</header>

                <div :class="{main: true, disabled: !mixer.filterPanel.active}">
                    <figure>
                        <?php echo file_get_contents("img/ic_filter.svg"); ?>
                    </figure>

                    <label for="filterToggle" class="switch">
                        <input type="checkbox"
                               id="filterToggle"
                               @change="togglePanel('filterPanel')"
                               :checked="mixer.filterPanel.active"

                               ga-on="change"
                               ga-event-category="exportPanel"
                               ga-event-action="toggle Filter"
                        >
                    </label>

                    <p class="toggleLabel">
                        <span v-if="mixer.filterPanel.active">{{ content[$root.locale].toggleOn }}</span>
                        <span v-else>{{ content[$root.locale].toggleOff }}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="strip">
            <div class="titleBox">
                <header>{{ content[$root.locale].fxStrip }}</header>

                <div :class="{main: true, disabled: !mixer.fxPanel.active}">
                    <figure>
                        <?php echo file_get_contents("img/ic_fx.svg"); ?>
                    </figure>

                    <label for="fxToggle" class="switch">
                        <input type="checkbox"
                               id="fxToggle"
                               @change="togglePanel('fxPanel')"
                               :checked="mixer.fxPanel.active"

                               ga-on="change"
                               ga-event-category="exportPanel"
                               ga-event-action="toggle Effects"
                        >
                    </label>

                    <p class="toggleLabel">
                        <span v-if="mixer.fxPanel.active">{{ content[$root.locale].toggleOn }}</span>
                        <span v-else>{{ content[$root.locale].toggleOff }}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="strip">
            <p>
                <span>{{ content[$root.locale].volumeStrip }}</span>
                <output for="mixervolume">{{ masterVolume }}%</output>
            </p>
            <input type="range"
                   :min=mixer.volume.min
                   v-model:value.number=mixer.volume.value
                   :max=mixer.volume.max
                   :step=mixer.volume.step

                   ga-on="change"
                   ga-event-category="exportPanel"
                   ga-event-action="volume"
            >
        </div>

        <div class="strip">
            <p>{{ content[$root.locale].exportStrip }}</p>
            <button
                id="exportBtn"
                class="exportBtn"
                @click=exportFile

                ga-on="click"
                ga-event-category="exportPanel"
                ga-event-action="export file"
            >
                {{ content[$root.locale].exportButton }}
            </button>
        </div>
    </div>

    <div class="exports titleBox">
        <header>
            <h4>{{ content[$root.locale].filesTitle }}</h4>
        </header>

        <div class="main">
            <ul id="recordingslist"  class="exportedFiles">
                <li><audio controls="" src="samples/aula_bola_fogo.wav"></audio><a href="bla.wav" class="bwButton">Download File: sine.wav</a></li>
            </ul>
        </div>
    </div>

</section>
<?= '</script>' ?>
