<script>
import navbar_on_side from "../../components/sections/navbar_on_side.vue";

import vue_footer from "../../components/sections/footer.vue";

import custom_button from "../../components/buttons/buttons.vue";

import CV_component from "./components/cv.vue";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default {
  props: ["screenSize"],
  components: {
    navbar_on_side,
    custom_button,
    vue_footer,

    CV_component,
  },
  data() {
    return {
      btns: [
        {
          text: "zoom in",
          icon: "bi-zoom-in",
          action: () => {
            this.zoomIn();
          },
        },
        {
          text: "restart zoom",
          icon: "bi-arrows-angle-contract",
          action: () => {
            this.zoomScale = 1;
            this.applyNewScale();
          },
        },
        {
          text: "zoom out",
          icon: "bi-zoom-out",
          action: () => {
            this.zoomOut();
          },
        },
        {
          text: "download",
          icon: "bi-download",
          action: () => {
            this.executePrint();
          },
        },
      ],
      zoomScale: 1,
    };
  },
  mounted() {},
  computed: {},
  methods: {
    executePrint() {
      const zoom = this.zoomScale;
      this.zoomScale = 1;
      this.cv_based_on_width(true);
      this.applyNewScale();

      this.printDocument().then(() => {
        this.zoomScale = zoom;
        this.cv_based_on_width(false);
        this.applyNewScale();
      });
    },
    async printDocument() {
      var elementHTML = document.querySelector("#CV");
      var page_count = elementHTML.querySelectorAll(".page").length;
      await html2canvas(elementHTML).then(function (canvas) {
        var pdf = new jsPDF("p", "mm", "a4");
        var myImage = canvas.toDataURL("image/jpeg,1.0");

        var imgWidth = pdf.internal.pageSize.getWidth();
        var imgHeight = pdf.internal.pageSize.getHeight() * page_count;

        for (let page = 0; page < page_count; page++) {
          if (page != 0) {
            pdf.addPage();
          }
          const y_offset = -page * (imgHeight / page_count);
          pdf.addImage(myImage, "png", 0, y_offset, imgWidth, imgHeight);
        }
        pdf.save(`Kacper Kotlewski CV.pdf`);
      });
      return;
    },
    cv_based_on_width(bool) {
      if (bool) {
        document.documentElement.style.setProperty("--a4-base-on-width", " ");
      } else {
        document.documentElement.style.removeProperty("--a4-base-on-width");
      }
    },
    zoomIn() {
      this.zoomScale += 0.1;
      if (this.zoomScale > 2) this.zoomScale = 2;
      this.applyNewScale();
    },
    zoomOut() {
      this.zoomScale -= 0.1;
      if (this.zoomScale < 0.5) this.zoomScale = 0.5;
      this.applyNewScale();
    },
    applyNewScale() {
      document.documentElement.style.setProperty(
        "--page-scale",
        `${this.zoomScale}`
      );
    },
  },
};
</script>

<template>
  <navbar_on_side :views="null" />
  <div
    class="fixed bottom-0 right-4 overflow-hidden w-fit h-fit z-10 bg-primary-bg-hard"
  >
    <template v-for="btn in btns" :key="btn.text">
      <div
        class="text-highlight-muted hover:text-highlight hover:scale-125 p-2"
        @click="btn.action"
      >
        <i class="bi text-2xl" :class="btn.icon"></i>
      </div>
    </template>
  </div>

  <div
    class="page-container min-h-full w-full flex flex-row justify-center item-center flex-wrap gap-4"
  >
    <CV_component id="CV" />
  </div>
  <!-- <in_build id="slide_1" class="blockedElement"/> -->
  <vue_footer class="" />
</template>