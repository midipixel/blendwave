<?= '<script type="text/x-template" id="fileHeader">' ?>
    <header class="fileHeader"
            @mousedown="play()"
            @mouseup="stop()"
            
            ga-on="click"
            ga-event-category="fileHeader"
            ga-event-action="Click To Play">
        &#x25BA; {{ content[$root.locale].title }} : {{ fileName }}
        <small>({{ content[$root.locale].hint }})</small>

        <section id="wavePreview"></section>
    </header>
<?= '</script>'  ?>
