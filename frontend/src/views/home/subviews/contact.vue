<script>
import flexMiddle from '../../components/containers/flex_middle.vue';
import fill_window from '../../components/containers/fill_window.vue';
import contact_form from '../../components/sections/contact_form.vue';

import blue_text from '../../components/text/blue.vue';

export default {
    components: {
        contact_form,
        flexMiddle,
        fill_window,
        blue_text,
    },
}
</script>



<template>
    <fill_window :height="'20vh'" style="display: flex; align-items:flex-end; justify-content:center;">
            <h2>
                <strong><blue_text>C</blue_text><span>ontact</span></strong><br/>
            </h2>
    </fill_window>
    <fill_window :height="'65vh'" style="overflow:hidden;">
        <flexMiddle id="contact_flex" :dir="'row'">
            <contact_form/>
        </flexMiddle>
    </fill_window>
</template>

<style scoped>
#contact_flex a{
    text-decoration: none;
    color: var(--color-highlight);
    font-size: 1.5rem;
}

@media screen and (max-width: var(--mobile-size)) {
    #contact_flex a{
        font-size: 1.2rem;
    }
}
</style>
