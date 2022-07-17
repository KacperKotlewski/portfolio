<script>
import flexMiddle from '../flex/flex_middle.vue';
import ButtonComp from './buttons.vue';

export default {
    components: {
        ButtonComp,
        flexMiddle,
    },
    props: ["gaps_between_btns"],
    data() {
        return {
            items: [
                { icon:"bi bi-linkedin", text:"LinkedIn", link:"https://www.linkedin.com/in/kacper-kotlewski-94b932168/", target:"_blank"},
                { icon:"bi bi-github", text:"Github", link:"https://github.com/KacperKotlewski", target:"_blank"},
                // { icon:"bi bi-folder-symlink-fill", text:"Repo", link:"https://github.com/KacperKotlewski/portfolio", target:"_blank"},
                // { icon:"bi bi-folder-symlink-fill", text:"Repo", link:"https://github.com/KacperKotlewski/portfolio", target:"_blank"},
                // { icon:"bi bi-envelope-fill", text:"Contact" },
                { icon:"bi bi-file-earmark-person-fill", text:"Resume", link:"https://drive.google.com/file/d/1YBhvd03l247Sb14V3ZxMpYn-s837tzq_/view?usp=sharing", target:"_blank" }
            ],
        }
    },
    computed: {
        cssVars () {
            return {
                '--size_of_btns': (768 - ((this.items.length+1)*this.gaps_between_btns))/this.items.length + "px",
            }
        },
        // mobile_buttons() {return (this.screenSize.width < (this.size_of_btns * this.items.length + this.gaps_between_btns * (this.items.length + 1)))}
    }
}
</script>


<template>
<div>
<flexMiddle :dir="'row'" :fill="'none'" :gap="gaps_between_btns">
    <ButtonComp
        :style="cssVars"
        v-for="item in items"
        :text="item.text"
        :icon="item.icon"
        :link="item.link"
        :target="item.target"
    />
</flexMiddle>
</div>
</template>

<style scoped>
a {
    width:var(--size_of_btns);
}

@media screen and (max-width: 768px) {
    div.flex_box {
        flex-direction: column;
    }
}
</style>
<style>

</style>
