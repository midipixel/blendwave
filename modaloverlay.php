<?= '<script type="text/x-template" id="modalOverlay">' ?>
    <section class="modalOverlay" v-if="active">
            <template v-if="type === 'export'">
                <div class="modal">
                    <h5>{{ modalcontent.title }}</h5>
                    <img src="img/loading.gif">
                    <p>{{ modalcontent.message }}</p>
                </div>
            </template>
            <template v-if="type === 'credits'">
                <div class="modal closeable credits">
                    <h5>
                        {{ modalcontent.title }}
                        <span class="closeButton" @click="active = false">
                            <?php echo file_get_contents("img/ic_close.svg"); ?>
                        </span>
                    </h5>

                    <div class="modalBody">
                        <p>{{ modalcontent.description }}</p>

                        <h6>
                            {{ modalcontent.samples.title }}
                        </h6>
                        <ul>
                            <li v-for="item in modalcontent.samples.list">
                                <a :href="'http' + item.link" target="_blank">{{ item.name }}</a> -
                                {{ item.description }}
                            </li>
                        </ul>

                        <h6>
                            {{ modalcontent.tech.title }}
                        </h6>
                        <ul>
                            <li v-for="item in modalcontent.tech.list">
                                <a :href="'http' + item.link" target="_blank">{{ item.name }}</a> -
                                {{ item.description }}
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
    </section>
<?= '</script>'  ?>


