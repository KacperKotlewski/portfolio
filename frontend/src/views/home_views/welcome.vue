<script>
import buttonColumn from '../../components/buttons/buttons_col.vue';
import flexMiddle from '../../components/flex/flex_middle.vue';
import fill_window from '../../components/fill_window.vue';

import write from '../../components/text/animation/write.vue';
import blue_text from '../../components/text/blue.vue';

export default {
    data() {
        return {
            buttons: [
                { icon:"bi bi-linkedin", text:"LinkedIn", link:"https://www.linkedin.com/in/kacper-kotlewski-94b932168/", target:"_blank"},
                { icon:"bi bi-github", text:"Github", link:"https://github.com/KacperKotlewski", target:"_blank"},
                // { icon:"bi bi-folder-symlink-fill", text:"Repo", link:"https://github.com/KacperKotlewski/portfolio", target:"_blank"},
                // { icon:"bi bi-folder-symlink-fill", text:"Repo", link:"https://github.com/KacperKotlewski/portfolio", target:"_blank"},
                // { icon:"bi bi-envelope-fill", text:"Contact" },
                { icon:"bi bi-file-earmark-person-fill", text:"Resume", link:"https://drive.google.com/file/d/1YBhvd03l247Sb14V3ZxMpYn-s837tzq_/view?usp=sharing", target:"_blank" }
            ],
        }
    },
    components: {
        buttonColumn,
        flexMiddle,
        fill_window,
        write,
        blue_text,
    },
    methods: {
        finished_writing() {
            this.$emit('animation_finished', true);
        },
    }
}
</script>



<template>
    <flexMiddle :gap="70">
        <header>
            <write @animation_finished="finished_writing" :start="true" :delay="1000">
                <strong><blue_text>W</blue_text><span>elcome!</span></strong><br/>
                <h1 class="subtitle">
                    <flexMiddle :dir="'row'" :change_on_mobile="true">
                        <span><span>I am </span><blue_text>K</blue_text><span>acper,</span></span>
                        <span>&nbsp;web developer.</span>
                    </flexMiddle>
                </h1>
            </write>
        </header>
        <buttonColumn id="welcome_buttons" :gaps_between_btns="30" :buttons="buttons" class="hiddenElement top"/>
    </flexMiddle>
</template>

@<style scoped>
header {
    text-align: center;
    color: #fff;

}
header strong, header strong span {
    font-size: 3.5rem;
    font-weight: bold;
}
</style>
