<script>
import navbar_on_side from "../../components/sections/navbar_on_side.vue";

import vue_footer from "../../components/sections/footer.vue";

import { registerRuntimeHelpers } from "@vue/compiler-core";

export default {
  props: ["screenSize"],
  components: {
    navbar_on_side,

    vue_footer,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {},
};
</script>

<template>
  <navbar_on_side :views="null" />
  <div>
    
  </div>
  <!-- <in_build id="slide_1" class="blockedElement"/> -->
  <vue_footer class="blockedElement hiddenElement" />
</template>

<style lang="scss">
</style>
