<script>
export default {
  props: ["text", "icon", "link", "target", "type"],
  data() {
    return {
      btn_classes: ["hide", "visable_text"],
    };
  },
  methods: {
    resolveLink() {
      if (this.type === "router") {
        //use router link to change page
        return this.$router.replace({ path: this.link });
      } else {
        return window.open(this.link, this.target);
      }
    },
  },
};
</script>

<template>
  <div class="button">
    <a @click="resolveLink()">
      <div v-for="cls in btn_classes" :class="cls" :aria-hidden="cls == 'hide'">
        <i v-if="icon" class="bi" :class="icon"></i>
        &nbsp;
        <span v-if="text">{{ text }}</span>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
div.button {
  margin: 0.5em;
  a {
    color: var(--color-highlight);
    font-size: 1.3em;
    transition: 0.2s;
    text-align: left;
    text-decoration: none;
    position: relative;
    // transition for all elements
    &::before,
    &::after,
    & > div {
      transition-duration: 0.2s;
      transition-property: transform, opacity;
    }
    //text boxes
    & > div {
      padding: 0.5em 1em;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
      &.visable_text {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
      }
    }
    //visual elements
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    &::before {
      background-color: var(--color-background-muted);
      transform: translate(-0.5em, 0.5em) scale(0.95);
    }
    &::after {
      border: 3px solid var(--color-highlight);
      opacity: 0.6;
      transform: translate(0.7em, -0.5em);
    }
    //on hover animations
    &:hover {
      &::before,
      &::after {
        transform: translate(0em, 0em);
      }
      &::before {
        width: 100%;
        height: 100%;
      }
      &::after {
        opacity: 1;
      }
      & > div.visable_text {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
    //mobile
    @media screen and (orientation: portrait) {
      & {
        font-size: 1em;
      }
    }
  }
}
</style>
