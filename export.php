<?= '<script type="text/x-template" id="exportPanel">' ?>
<section class="panelContent" id="export" v-show="active">
    <?php include('fileHeader.php')?> 

    <h3>Saída<em>Revise os parâmetros de seu som e faça o download</em></h3>

    <button id="exportBtn">Exportar</button>

    <h5>Arquivos Exportados</h5>
    <ul id="recordingslist"></ul>
</section>
<?= '</script>' ?>
