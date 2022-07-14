<script>

export default {
    name: 'blue_text',
    data() {
        return {
        }
    },
}
</script>


<template>
    <span class="blue_text">
        <slot/>
    </span>
</template>

<style>
span.blue_text {
    color: #0AE1C1;
}
</style>
