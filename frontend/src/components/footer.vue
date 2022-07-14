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
        <flexMiddle>
            <h2><strong>Kacper Kotlewski</strong></h2>
            <!-- <flexMiddle :dir="'row'" :gap="20">
                <a>link</a>
                <vl />
                <a>link</a>
                <vl />
                <a>link</a>
            </flexMiddle> -->
            <span>© 2022 Kacper Kotlewski. All rights reserved</span>
        </flexMiddle>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: 100%;
    background-color: #81818139;
    color: #fff;
    text-align: center;
    line-height: 50px;
}
</style>
