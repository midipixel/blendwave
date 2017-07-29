<?= '<script type="text/x-template" id="filterPanel">' ?>

<section class="panelContent" id="filter" v-show="active">
    <?php include('fileHeader.php')?> 

    <h3>Filtro <em>Manipule seu som atenuando determinadas faixas de frequência</em></h3>

    <div class="row">
        <form action="" autocomplete="off">
            <div class="col-sm-6">
                <h5><label for="filter">Tipo de Filtro</label></h5>

                <div class="dspType filterType">
                    <select id="filter">
                        <option id="noFilter" selected="selected">Sem Filtro</option>
                        <option id="hp">High Pass</option>
                        <option id="lp">Low Pass</option>
                    </select>
                    <p></p>
                </div>

                <div class="dspSetup filterSetup">
                    <figure>
                        <img src="img/filter_hp.png" alt="">
                    </figure>

                    <fieldset id="filterParams" class="audioParams disabled" disabled="disabled">
                        <label for="filter_cutoff">Frequência de Corte</label>
                        <input type="range" id="filter_cutoff" min="100" value="100" max="22000" step="100" data-type="audioParam">
                        <output for="filter_cutoff">100</output>
                    </fieldset>
                </div>
            </div>

            <div class="col-sm-6">
                <fieldset id="filter_osc" class="audioParams disabled">
                    <legend><input type="checkbox" /> Oscilar Filtro</legend>

                    <label for="filterOSC_speed">Velocidade</label>
                    <input type="range" id="filterOSC_speed" min="1" value="5" max="20" step="1" data-type="audioParam" disabled="true">
                    <output for="filterOSC_speed">5</output>

                    <label for="filterOSC_depth">Força</label>
                    <input type="range" id="filterOSC_depth" min="100" value="1" max="1000" step="50" data-type="audioParam" disabled="true">
                    <output for="filterOSC_depth">1</output>
                </fieldset>
            </div>
        </form>
    </div>
</section>

<?= '</script>'  ?>
