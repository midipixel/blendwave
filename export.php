<?= '<script type="text/x-template" id="exportPanel">' ?>
<section class="panelContent" id="export" v-show="active">
    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <div class="mixer">
        <div :class="{strip:true, envelope: mixer.envelopePanel.active}">
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

                               ga-on="click"
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

        <div :class="{strip:true, filter: mixer.filterPanel.active}">
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

                               ga-on="click"
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

        <div :class="{strip:true, fx: mixer.fxPanel.active}">
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

                               ga-on="click"
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

        <div class="strip volumeMixer">
            <div class="titleBox">
                <header>{{ content[$root.locale].volumeStrip }}</header>

                <div class="main audioParams"
                     :style="{background: 'linear-gradient(to top, #61646e ' + masterVolume + '%, #4b4f58 ' + masterVolume + '%, #4b4f58 100%)'}"
                >

                    <div class="slider">
                        <input type="range"
                               :min=mixer.volume.min
                               v-model:value.number=mixer.volume.value
                               :max=mixer.volume.max
                               :step=mixer.volume.step

                               @change="$root.gaSend('event', { eventCategory: 'exportPanel', eventAction: 'volume',})"/>
                    </div>

                    <output for="mixervolume">{{ masterVolume }}%</output>
                </div>
            </div>
        </div>

        <div class="strip export">
            <div class="titleBox">
                <header>{{ content[$root.locale].exportStrip }}</header>

                <div class="main">
                    <figure>
                        <?php echo file_get_contents("img/ic_export.svg"); ?>
                    </figure>

                    <button
                        id="exportBtn"
                        class="bwButton"
                        @click=exportFile

                        ga-on="click"
                        ga-event-category="exportPanel"
                        ga-event-action="export file"
                    >
                        {{ content[$root.locale].exportButton }}
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="exports titleBox">
        <header>
            <h4>{{ content[$root.locale].filesTitle }}</h4>
        </header>

        <div class="main">
            <p v-if="emptyList">{{ content[$root.locale].exportPlaceholder }}</p>

            <ul id="recordingslist"  class="exportedFiles">
                <li id="dlTemplate">
                    <h5></h5>

                    <div class="mediaContainer">
                        <div class="player">
                            <audio controls="true" src=""></audio>
                        </div>
                        <div class="fileWaveform" id="fileWaveform"></div>
                    </div>

                    <div class="fileButtons">
                        <a
                           class="bwButton"
                           href="#"
                           download=""
                           data-id="dwButton"

                           ga-on="click"
                           ga-event-category="exportPanel"
                           ga-event-action="downloadFile">{{ content[$root.locale].downloadText }}</a>

                        <a
                           class="bwButton delButton"
                           data-id="delButton"

                           ga-on="click"
                           ga-event-category="exportPanel"
                           ga-event-action="downloadFile">{{ content[$root.locale].removeButton }}</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <modaloverlay :modalcontent="content[$root.locale].modal" :active="exporting" type="export"></modaloverlay>
</section>
<?= '</script>' ?>
