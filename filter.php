<?= '<script type="text/x-template" id="filterPanel">' ?>

<section class="panelContent" id="filter" v-show="active">
    <?php include('fileHeader.php')?> 

    <h3>Filtro <em> Refine o som, filtrando as frequências altas ou baixas</em></h3>

    <div class="row">
        <form action="" autocomplete="off">
            <div class="col-sm-6">
                <h5><label for="filter">Tipo de Filtro</label></h5>

                <div class="dspType filterType">
                    <select
                        id="filter"
                        v-model="selected"
                        v-on:change="set"

                        ga-on="change"
                        ga-event-category="filterType"
                        ga-event-action="choose filter type">

                        <option value="none" selected="selected">{{ none.name }}</option>
                        <option value="lowpass">{{ lowpass.name }}</option>
                        <option value="highpass">{{ highpass.name }}</option>
                    </select>
                    <p>{{ this[selected].description }}</p>
                </div>

                <div :class="'dspSetup filterSetup' + ' ' + this.selected" >
                    <figure>
                        <img :src="'img/filter_'+ this.selected +'.png'" :alt="this.selected.name">
                    </figure>

                    <fieldset class="audioParams" :disabled="this.selected == 'none'">
                        <label for="filter_cutoff">{{ this[selected].params ? this[selected].params.cutoff.name : this.lowpass.params.cutoff.name}}</label>
                        <input
                            type="range"
                            id="filter_cutoff"
                            min="100"
                            value="100"
                            max="22000"
                            step="100"
                            data-type="audioParam"
                            ga-on="change"
                            ga-event-category="filterCutoff"
                            ga-event-action="Change Cutoff">
                        <output for="filter_cutoff">100</output>
                    </fieldset>
                </div>
            </div>

            <div class="col-sm-6">
                <fieldset id="filter_osc" class="audioParams disabled">
                    <legend>
                        <input
                            type="checkbox"
                            ga-on="change"
                            ga-event-category="filterOSC"
                            ga-event-action="toggle filter oscillator"/>
                        Oscilar Filtro
                    </legend>

                    <label for="filterOSC_speed">Velocidade</label>
                    <input
                        type="range"
                        id="filterOSC_speed"
                        min="1"
                        value="5"
                        max="20"
                        step="1"
                        data-type="audioParam"
                        disabled="true"
                        ga-on="change"
                        ga-event-category="filterOSC"
                        ga-event-action="speed">
                    <output for="filterOSC_speed">5</output>

                    <label for="filterOSC_depth">Força</label>
                    <input
                        type="range"
                        id="filterOSC_depth"
                        min="0"
                        value="0"
                        max="1"
                        step="0.1"
                        data-type="audioParam"
                        disabled="true"
                        ga-on="change"
                        ga-event-category="filterOSC"
                        ga-event-action="depth">
                    <output for="filterOSC_depth">1</output>
                </fieldset>
            </div>
        </form>
    </div>
</section>

<?= '</script>'  ?>
