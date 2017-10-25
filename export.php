<?= '<script type="text/x-template" id="exportPanel">' ?>
<section class="panelContent" id="export" v-show="active">
    <fileheader></fileheader>

    <h3>{{ content[$root.locale].title }}<em>{{ content[$root.locale].subtitle }}</em></h3>

    <button
        id="exportBtn"
        class="exportBtn"
        @click=exportFile
        ga-on="click"
        ga-event-category="exportPanel"
        ga-event-action="export file">
        {{ content[$root.locale].exportButton }}
    </button>

    <div class="exports">
        <h4>{{ content[$root.locale].filesTitle }}</h4>
        <ul id="recordingslist"  class="exportedFiles">
        </ul>
    </div>

</section>
<?= '</script>' ?>
