<script>
import buttonColumn from '../components/buttons/buttons_col.vue';
import flexMiddle from '../components/flex/flex_middle.vue';
import fill_window from '../components/fill_window.vue';
import vue_footer from '../components/footer.vue';

export default {
    props: ['screenSize'],
    components: {
        buttonColumn,
        flexMiddle,
        fill_window,
        vue_footer,
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <fill_window>
        <flexMiddle :gap="30">
            <h1>
                <strong><span>W</span>elcome!</strong><br/>
                I’m <span>K</span>acper, web developer
            </h1>
            <buttonColumn :size_of_btns="160" :gaps_between_btns="30" :screenSize="screenSize" />
        </flexMiddle>
    </fill_window>

    <fill_window>
        <fill_window :height="'80vh'">
        </fill_window>
        <fill_window :height="'20vh'">
            <vue_footer />
        </fill_window>
    </fill_window>
</template>

<style scoped>
h1 {
    text-align: center;
    color: #fff;
}
h1 strong, h1 strong span {
    font-size: 3.5rem;
    font-weight: bold;
}
h1 span {
    color: #0AE1C1;
}
</style>
