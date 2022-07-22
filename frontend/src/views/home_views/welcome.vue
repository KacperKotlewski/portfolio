<script>
import buttonColumn from '../../components/buttons/buttons_col.vue';
import ButtonComp from '../../components/buttons/buttons.vue';
import flexMiddle from '../../components/containers/flex_middle.vue';
import fill_window from '../../components/containers/fill_window.vue';

import write from '../../components/text/animation/write.vue';
import blue_text from '../../components/text/blue.vue';

export default {
    data() {
        return {
            buttons: [
                { icon:"bi-linkedin", text:"LinkedIn", link:"https://www.linkedin.com/in/kacper-kotlewski-94b932168/", target:"_blank"},
                { icon:"bi-github", text:"Github", link:"https://github.com/KacperKotlewski", target:"_blank"},
                // { icon:"bi bi-folder-symlink-fill", text:"Repo", link:"https://github.com/KacperKotlewski/portfolio", target:"_blank"},
                // { icon:"bi bi-folder-symlink-fill", text:"Repo", link:"https://github.com/KacperKotlewski/portfolio", target:"_blank"},
                // { icon:"bi bi-envelope-fill", text:"Contact" },
                { icon:"bi-file-earmark-person-fill", text:"Resume", link:"https://drive.google.com/file/d/1Xjjf1BAECilP2o4teL6_ObpOACCnfDtk/view?usp=sharing", target:"_blank" }
            ],
        }
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
            this.$emit('animation_finished', true);
        },
    },
}
</script>



<template>
    <section id="Welcome">
        <header>
            <h2 aria-disabled="true">Welcome</h2>
            <write @animation_finished="finished_writing" :start="true" :delay="1000">
                <strong><blue_text>W</blue_text><span>elcome!</span></strong><br/>
            </write>
        </header>
        <section class="subtitle hiddenElement">
            <span><span>I am </span><blue_text>K</blue_text><span>acper,</span></span>
            <span>&nbsp;web developer.</span>
        </section>
        <section class="description hiddenElement">
            about section
        </section>
        <div id="btn_read_more" class="hiddenElement"><ButtonComp :text="'Read more about me'" /></div>
        <div id="logo"></div>
    </section>
</template>

<style scoped>
header, .subtitle {
    text-align: left;
    color: var(--color-text);
    font-size: 2.5rem;
}
header strong, header strong span {
    font-size: 1.5em;
    font-weight: bold;
}
section#Welcome {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-rows: repeat(9, [col-start] 1fr);
}
header{
    grid-column: 2 / span 6;
    grid-row: 2 / span 2;
}
.subtitle{
    grid-column: 2 / span 6;
    grid-row: 3 / span 1;
}
.description{
    grid-column: 2 / span 6;
    grid-row: 4 / 7;
}
#btn_read_more{
    grid-column: 2 / span 2;
    grid-row: 7 / span 1;
}
#btn_read_more a{
    height: 10px;
}
#logo{
    grid-column: 8 / span 4;
    grid-row: 3 / span 4;
    background: url(@/assets/logo_v1.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

@media screen and (max-width: 768px) {
    header {
        font-size: 1.5rem;
    }
}
</style>
