<?= '<script type="text/x-template" id="exportPanel">' ?>
<section class="panelContent" id="export" v-show="active">
    <fileheader></fileheader>

    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <div class="mixer">
        <div class="strip">
            <p>Amp e Pitch</p>
            <input type="checkbox"
                   id="envelopeToggle"
                   @change="togglePanel('envelopePanel')"
                   :checked="mixer.envelopePanel.active">
            <label for="envelopeToggle">Ligado</label>
        </div>

        <div class="strip">
            <p>Filtro</p>
            <input type="checkbox"
                   id="filterToggle"
                   @change="togglePanel('filterPanel')"
                   :checked="mixer.filterPanel.active">
            <label for="filterToggle">Ligado</label>
        </div>

        <div class="strip">
            <p>Efeitos</p>
            <input type="checkbox"
                   id="fxToggle"
                   @change="togglePanel('fxPanel')"
                   :checked="mixer.fxPanel.active">
            <label for="fxToggle">Ligado</label>
        </div>

        <div class="strip">
            <p>
                <span>Volume</span>
                <output for="mixervolume">100%</output>
            </p>
            <input type="range" id="mixervolume">
        </div>

        <div class="strip">
            <p>Export</p>
            <button
                id="exportBtn"
                class="exportBtn"
                @click=exportFile
                ga-on="click"
                ga-event-category="exportPanel"
                ga-event-action="export file">
                {{ content[$root.locale].exportButton }}
            </button>
        </div>
    </div>



    <div class="exports">
        <h4>{{ content[$root.locale].filesTitle }}</h4>
        <ul id="recordingslist"  class="exportedFiles">
        </ul>
    </div>

</section>
<?= '</script>' ?>
