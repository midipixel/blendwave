<?= '<script type="text/x-template" id="exportPanel">' ?>
<section class="panelContent" id="export" v-show="active">
    <?php include('fileHeader.php')?> 

    <h3>Saída<em>Exporte o resultado final em formato WAV, e faça o download</em></h3>

    <button
        id="exportBtn"
        class="exportBtn"
        @click=exportFile
        ga-on="click"
        ga-event-category="exportPanel"
        ga-event-action="export file">
        Exportar Áudio
    </button>

    <div class="exports">
        <h4>Arquivos Exportados:</h4>
        <ul id="recordingslist"  class="exportedFiles">
        </ul>
    </div>

</section>
<?= '</script>' ?>
