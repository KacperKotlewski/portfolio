<script>
export default {
    props: ['height'],
    data() {
        return {
        }
    },
    computed: {
        varsCSS() {
            return {
                '--height': (this.height) ? this.$props.height : '100vh'
            }
        }
    },
}
</script>

<template>
    <div class="fill_window" :style="varsCSS">
        <slot />
    </div>
</template>

<style scoped>
div.fill_window {

    width: 100%;
    height: var(--height);
}
</style>
