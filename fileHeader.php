<?= '<script type="text/x-template" id="fileHeader">' ?>
    <header class="fileHeader"
            ga-on="click"
            ga-event-category="fileHeader"
            ga-event-action="Click To Play">
        &#x25BA; Som Escolhido: {{ fileName }}
        <small>(aperte 'P' para Preview)</small>

        <section id="wavePreview"></section>
    </header>
<?= '</script>'  ?>
