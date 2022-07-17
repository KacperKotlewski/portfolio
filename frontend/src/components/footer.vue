<script>
import flexMiddle from './flex/flex_middle.vue';
import vl from './vertical_line.vue';

export default {
    props: ['screenSize'],
    components: {
        flexMiddle,
        vl,
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <footer>
        <!-- <h2><strong>Kacper Kotlewski</strong></h2> -->
        <!-- <flexMiddle :dir="'row'" :gap="20">
            <a>link</a>
            <vl />
            <a>link</a>
            <vl />
            <a>link</a>
        </flexMiddle> -->
        <a href="mailto:kacperkotlewski.kontakt@gmail.com"><i class="bi bi-envelope-open-fill"></i> kacperkotlewski.kontakt@gmail.com</a>
        <br>
        <span>© 2022 Kacper Kotlewski. All rights reserved</span>
    </footer>
</template>

<style scoped>
footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 50px;
    overflow: hidden;
}
footer a {
    color: #fff;
    text-decoration: none;
}
</style>
