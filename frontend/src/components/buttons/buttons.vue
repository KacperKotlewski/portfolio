<script>
export default {
  props: ['text', 'icon', 'link', 'target'],
  data() {
    return {
    }
  }
}
</script>

<template>
    <a :href='link' :target="target"><i :class='icon'></i> {{ text }}</a>
</template>

<style scoped>
    a {
        background-color: rgba(0, 0, 0, 0.8);
        border: 3px solid #0AE1C1;
        border-radius: 1rem;
        color: #0AE1C1;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        transition: 0.4s;
        text-align: center;
        text-decoration: none;
    }
    a:hover {

        border: 0.2rem solid #fff;
        border-radius: 1.2rem;
        padding: 0.4em;
        box-shadow: 0 0 .1rem #fff,
                    0 0 .1rem #fff,
                    0 0 1rem #0AE1C1,
                    0 0 0.2rem #0AE1C1,
                    0 0 1.6rem #0AE1C1,
                    inset 0 0 0.65rem #0AE1C1;
    }
</style>
