<script>
export default {
  props: ['text'],
  data() {
    return {
        icon: "i",
    }
  }
}
</script>

<template>
    <button>{{ icon }} {{ text }}</button>
</template>

<style scoped>
    button {
        background-color: rgba(0, 0, 0, 0.8);
        border: 3px solid #0AE1C1;
        border-radius: 1rem;
        color: #0AE1C1;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        transition: 0.4s;
        text-align: center;
    }
    button:hover {

        border: 0.2rem solid #fff;
        border-radius: 1.2rem;
        padding: 0.4em;
        box-shadow: 0 0 .1rem #fff,
                    0 0 .1rem #fff,
                    0 0 1rem #0AE1C1,
                    0 0 0.4rem #0AE1C1,
                    0 0 1.4rem #0AE1C1,
                    inset 0 0 0.65rem #0AE1C1;


    text-shadow:
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 9px #fff,
      0 0 20px #0AE1C1,
      0 0 40px #0AE1C1,
      0 0 45px #0AE1C1,
      0 0 50px #0AE1C1,
      0 0 75px #0AE1C1;
    }
</style>
