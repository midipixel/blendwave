<?= '<script type="text/x-template" id="fileHeader">' ?>
    <header class="fileHeader"
            @mousedown="play()"
            @mouseup="stop()"
            
            ga-on="click"
            ga-event-category="fileHeader"
            ga-event-action="Click To Play">
        <strong>{{ content[$root.locale].title }}</strong> : {{ fileName }}
        <small>({{ content[$root.locale].hint }})</small>
    </header>
<?= '</script>'  ?>
