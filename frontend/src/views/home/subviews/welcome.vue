<script>
import buttonColumn from "../../../components/buttons/buttons_col.vue";
import ButtonComp from "../../../components/buttons/buttons.vue";
import flexMiddle from "../../../components/containers/flex_middle.vue";
import fill_window from "../../../components/containers/fill_window.vue";

import write from "../../../components/text/animation/write.vue";
import blue_text from "../../../components/text/blue.vue";

export default {
  data() {
    return {
      buttons: [
        {
          icon: "bi-linkedin",
          text: "LinkedIn",
          link: "https://www.linkedin.com/in/kacper-kotlewski-94b932168/",
          target: "_blank",
        },
        {
          icon: "bi-github",
          text: "Github",
          link: "https://github.com/KacperKotlewski",
          target: "_blank",
        },
        // { icon:"bi bi-folder-symlink-fill", text:"Repo", link:"https://github.com/KacperKotlewski/portfolio", target:"_blank"},
        // { icon:"bi bi-folder-symlink-fill", text:"Repo", link:"https://github.com/KacperKotlewski/portfolio", target:"_blank"},
        // { icon:"bi bi-envelope-fill", text:"Contact" },
        {
          icon: "bi-file-earmark-person-fill",
          text: "Resume",
          link: "https://drive.google.com/file/d/1Xjjf1BAECilP2o4teL6_ObpOACCnfDtk/view?usp=sharing",
          target: "_blank",
        },
      ],
    };
  },
  components: {
    buttonColumn,
    flexMiddle,
    fill_window,
    write,
    blue_text,
    ButtonComp,
  },
  methods: {
    finished_writing() {
      setTimeout(() => {
        this.$emit("animation_finished", true);
      }, 1000);
    },
  },
};
</script>

<template>
  <section id="Welcome">
    <header>
      <h2 aria-disabled="true">Welcome</h2>
      <write @animation_finished="finished_writing" :start="true" :delay="1000">
        <strong><blue_text>W</blue_text><span>elcome!</span></strong
        ><br />
      </write>
    </header>
    <section class="subtitle hiddenElement">
      <span><span>I am </span><blue_text>K</blue_text><span>acper,</span></span>
      <span>&nbsp;web developer.</span>
    </section>
    <section class="description hiddenElement">
      <p>
        <strong>22 years old</strong>

      </p>
      <p>
        <strong>10 years of passion</strong>
        to programming
      </p>
      <p>
        <strong>7 years of experience</strong>
        with web development
      </p>
      <p>
        <strong>4 years of experience</strong>
        with clients
      </p>
      <p>
        <strong>2 years of experience</strong>
        as worker
      </p>
    </section>
    <div id="btn_read_more" class="hiddenElement">
      <!-- <ButtonComp :text="'Read more about me'" /> -->
      <buttonColumn :buttons="buttons" :gaps_between_btns="10" />
    </div>
    <div id="logo"><div></div></div>
  </section>
</template>

<style scoped lang="scss">
section#Welcome {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-template-rows: repeat(9, [col-start] 1fr);
  header,
  .subtitle {
    color: var(--color-text);
    font-size: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    strong,
    strong span {
      font-size: 1.5em;
    }
  }
  header {
    grid-column: 2 / span 6;
    grid-row: 2 / span 1;
  }
  .subtitle {
    grid-column: 2 / span 6;
    grid-row: 3 / span 1;
  }
  .description {
    margin: 20px 0;
    grid-column: 2 / span 6;
    grid-row: 4 / span 4;
    font-size: 1.4em;
  }
  #btn_read_more {
    grid-column: 2 / span 2;
    grid-row: 8 / span 1;
    font-size: 1.1em;
    a {
      height: 10px;
    }
  }
  #logo {
    grid-column: 8 / span 4;
    grid-row: 3 / span 4;
  }
}

$rotation-time: 1;
$delay: 2;
$total-animation: calc($rotation-time + $delay);

#logo div {
  width: 100%;
  height: 100%;
  background: url(@/assets/logo_v1.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  animation: rotate calc($total-animation * 1s) linear;
}

$s: calc(100% / $total-animation);
@keyframes rotate {
  0% {
    transform: rotateY(90deg);
  }
  #{$s* $delay} {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0);
  }
}

@media screen and (orientation: portrait) {
  section#Welcome {
    grid-template-columns: repeat(6, [col-start] 1fr);
    grid-template-rows: repeat(18, [col-start] 1fr);
    row-gap: 1em;
    header,
    .subtitle {
      justify-content: center;
    }
    header {
      grid-column: 2 / span 4;
      grid-row: 2 / span 2;
    }
    .subtitle {
      grid-column: 1 / span 7;
      grid-row: 4 / span 2;
    }
    #logo {
      grid-column: 3 / span 2;
      grid-row: 6 / span 3;
    }
    .description {
      grid-column: 2 / span 4;
      grid-row: 9 / span 5;
    }
    #btn_read_more {
      font-size: 1.5em;
      grid-column: 3 / span 2;
      grid-row: 16 / span 3;
    }
  }
}
</style>
