<?= '<script type="text/x-template" id="fileHeader">' ?>
    <header class="container fileHeader"
            :class="{fileHeader_active: this.active}"
            @mousedown="play()"
            @mouseup="stop()"
            
            ga-on="click"
            ga-event-category="fileHeader"
            ga-event-action="Click To Play">
        <div class="fhBody">
            <strong>{{ content[$root.locale].title }}</strong> : {{ fileName }}
            <small>({{ content[$root.locale].hint }})</small>
        </div>
    </header>
<?= '</script>'  ?>
