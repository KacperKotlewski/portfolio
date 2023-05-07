<script setup>
// import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="main">
    <header>
      <h1 aria-disabled="true">Kacper Kotlewski</h1>
      <nav id="topMenu">
        <router-link to="/">home</router-link>
        <router-link to="/cv/">cv</router-link>
      </nav>
    </header>

    <content>
      <!-- <RouterView :screenSize='screenSize' /> -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="in-out">
          <component :is="Component" :screenSize="screenSize" />
        </transition>
      </router-view>
    </content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenSize: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      },
    };
  },
  mounted() {
    window.addEventListener("resize", this.getDimensions);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.screenSize.width = document.documentElement.clientWidth;
      this.screenSize.height = document.documentElement.clientHeight;
    },
  },
};
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
nav#topMenu {
  position: fixed;
  width: 100%;
}
</style>

<style lang="scss">
@import "@/assets/base.scss";

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
  z-index: 999;
  a {
    &.router-link-exact-active {
      color: var(--color-text);
      &:hover {
        background-color: transparent;
      }
    }

    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-highlight);
    color: var(--color-text-muted);
    background-color: var(--color-background);

    &:first-of-type {
      border: 0;
    }
    &:last-child {
      margin-right: 7px;
    }
  }
}
</style>
