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
    <a :href='link' :target="target"><i v-if="icon" :class='icon'></i>&nbsp;<span v-if="text">{{ text }}</span></a>
</template>

<style scoped>
    a {
        color: #0AE1C1;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        transition: 0.4s;
        text-align: left;
        text-decoration: none;
        position: relative;
    }
    a::before{
        content: '';
        display: block;
        width: 2em;
        height: 60%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.8);
        transform: translate(2em, 0.5em);
        transition: all 0.3s ease-in;
    }
    a::after{
        content: '';
        display: block;
        width: 100%;
        height: 1%;
        position: absolute;
        top: 0;
        left: 0;
        border: 3px solid #0ae1c100;
        transform: translate(0em, 1em);
        transition: all 0.2s;
    }
    a:hover::before {
      width: 100%;
      height: 100%;
      transform: translate(0em, 0em);
    }
    a:hover::after {
      width: 100%;
      height: 100%;
      transform: translate(0em, 0em);
      border-color: #0AE1C1;
    }
</style>
