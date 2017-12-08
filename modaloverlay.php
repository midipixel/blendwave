<?= '<script type="text/x-template" id="modalOverlay">' ?>
    <section class="modalOverlay" v-if="active">
        <div class="modal">
            <h6>{{ modalcontent.title }}</h6>
            <img src="img/loading.gif">
            <p>{{ modalcontent.message }}</p>
        </div>
    </section>
<?= '</script>'  ?>


