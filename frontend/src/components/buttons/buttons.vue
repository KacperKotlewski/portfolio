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
    <a :href='link' :target="target">
      <div class="place_holder_in_button"><i v-if="icon" :class='icon'></i>&nbsp;<span v-if="text">{{ text }}</span></div>
      <div class="text_in_button"><i v-if="icon" :class='icon'></i>&nbsp;<span v-if="text">{{ text }}</span></div>
    </a>
</template>

<style scoped>
    a {
        color: #0AE1C1;
        font-size: 1rem;
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
        background-color: rgba(0,0,0,1);
        transform: translate(2em, 0.5em);
        transition: all 0.3s ease-in;
    }
    a::after{
        content: '';
        display: block;
        width: 80%;
        height: 80%;
        position: absolute;
        top: 0;
        left: 0;
        border: 3px solid #0ae1c140;
        transform: translate(0.5em, 0.2em);
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
    a > div{
      padding: 0.5em 1em;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in;
      display: flex;
      align-items: center;
      justify-content: left;
    }
    a > div.text_in_button{
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }
    a:hover > div.text_in_button{
      font-size: 1.2em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    a > div.place_holder_in_button{
        color: #0ae1c100;
    }
</style>
