<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">home</RouterLink>
      </nav>
    </header>
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

div {
  position: relative;
  width: 100%;
  height: 100%;
}
header{
  position: fixed;
  width: 100%;
}
</style>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  font-weight: normal;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

header {
  line-height: 1.5;
  max-height: 10vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
