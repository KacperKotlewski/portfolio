<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="main">
    <nav id="topMenu">
      <RouterLink to="/">home</RouterLink>
    </nav>

    <content>
      <RouterView :screenSize='screenSize' />
    </content>
  </div>
</template>


<script>
export default {
  data() {
    return {
      screenSize : {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.screenSize.width = document.documentElement.clientWidth;
      this.screenSize.height = document.documentElement.clientHeight;
    }
  }
}
</script>

<style scoped>
content {
  width: 100vw;
}

div.main {
  position: relative;
  width: 100%;
  height: 100%;
}
nav#topMenu{
  position: fixed;
  width: 100%;
}
</style>

<style>
@import "@/assets/base.css";

/* width */
::-webkit-scrollbar {
  width:7px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: inherit;
  background: #444;
  width:3px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #777;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888;
}

#app {
  font-weight: normal;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
}

nav#topMenu {
  width: 100%;
  font-size: 12px;
  text-align: right;
  margin-top: 2rem;
  margin-right: 2rem;
}

nav#topMenu a.router-link-exact-active {
  color: var(--color-text);
}

nav#topMenu a.router-link-exact-active:hover {
  background-color: transparent;
}

nav#topMenu a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav#topMenu a:first-of-type {
  border: 0;
}
</style>
