<footer class="container bwFooter">
    <div class="row">
        <div class="col-md-12 footerMain">
            <p>Blendwave <?php echo date("Y"); ?>. Developed by <a href="http://www.midipixel.com" target="_blank">Midipixel</a>, using <a href="https://alemangui.github.io/pizzicato/" target="_blank">Pizzicato.js</a>.</p>
            <p>See the <a href="#" @click="credits.visible = true">full credits list</a> for the audio samples and other JS libraries.</p>
        </div>
    </div>
</footer>

<modaloverlay
    v-on:close="closeModal()"
    :modalcontent="credits.content[$root.locale]"
    :active="credits.visible"
    type="credits">
</modaloverlay>
