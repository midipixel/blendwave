<?= '<script type="text/x-template" id="exportPanel">' ?>
<section class="panelContent" id="export" v-show="active">
    <fileheader></fileheader>

    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <div class="mixer">
        <div class="strip">
            <p>Amp e Pitch</p>
            <input type="checkbox"
                   @change="togglePanel('envelope')"
                   :checked="mixer.envelope.active">
            Ligado
        </div>

        <div class="strip">
            <p>Filtro</p>
            <input type="checkbox"
                   @change="togglePanel('filter')"
                   :checked="mixer.filter.active">
            Ligado
        </div>

        <div class="strip">
            <p>Efeitos</p>
            <input type="checkbox"
                   @change="togglePanel('effects')"
                   :checked="mixer.effects.active">
            Ligado
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
