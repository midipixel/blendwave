<header class="bwHeader container">
    <nav class="row no-gutters mainNav">
        <figure class="col-md-2 logo">
            <img src="img/bw_logo.svg" alt="Blendwave">
        </figure>

        <ul class="col-md-10" style="display: none;" v-show="loaded" >
            <li class="wave">
                <a href="#" @click.prevent="activatePanel('wavePanel')">
                    <?php echo file_get_contents("img/ic_wave.svg"); ?>
                    {{ content[locale].wavePanel }}
                </a>
            </li>
            <li :class="{envelope: true, disabled: panels.envelopePanel.disabled}">
                <a href="#"
                   :title="panels.envelopePanel.disabled ? content[locale].disabledWarning : null"
                   @click.prevent="activatePanel('envelopePanel')">
                    <?php echo file_get_contents("img/ic_envelope.svg"); ?>
                    {{ content[locale].envelopePanel }}
                </a>
            </li>
            <li :class="{filter: true, disabled: panels.filterPanel.disabled}">
                <a href="#"
                   :title="panels.filterPanel.disabled ? content[locale].disabledWarning : null"
                   @click.prevent="activatePanel('filterPanel')">
                    <?php echo file_get_contents("img/ic_filter.svg"); ?>
                    {{ content[locale].filterPanel }}
                </a>
            </li>
            <li :class="{fx: true, disabled: panels.fxPanel.disabled}">
                <a href="#"
                   :title="panels.fxPanel.disabled ? content[locale].disabledWarning : null"
                   @click.prevent="activatePanel('fxPanel')">
                    <?php echo file_get_contents("img/ic_fx.svg"); ?>
                    {{ content[locale].fxPanel }}
                </a>
            </li>
            <li class="export">
                <a href="#" @click.prevent="activatePanel('exportPanel')">
                    <?php echo file_get_contents("img/ic_export.svg"); ?>
                    {{ content[locale].exportPanel }}</a>
            </li>
        </ul>
    </nav>
</header>

<fileheader ref="fileHeader"></fileheader>
