<script>
import flexMiddle from '../flex/flex_middle.vue';
import ButtonComp from './buttons.vue';

export default {
    components: {
        ButtonComp,
        flexMiddle,
    },
    props: ['size_of_btns', "screenSize", "gaps_between_btns"],
    data() {
        return {
            items: [
                { icon:"bi bi-github", text:"Github", link:"https://github.com/KacperKotlewski", target:"_blank"},
                { icon:"bi bi-folder-symlink-fill", text:"Repo", link:"https://github.com/KacperKotlewski/portfolio", target:"_blank"},
                // { icon:"bi bi-envelope-fill", text:"Contact" },
                // { icon:"bi bi-file-earmark-person-fill", text:"Resume" }
            ],
        }
    },
    computed: {
        cssVars () {
            return {
                '--size_of_btns': (this.size_of_btns) + "px",
            }
        },
        mobile_buttons() {return (this.screenSize.width < (this.size_of_btns * this.items.length + this.gaps_between_btns * (this.items.length + 1)))}
    }
}
</script>


<template>
<div>
<flexMiddle :dir="[ mobile_buttons?'column':'row' ]" :fill="'none'" :gap="gaps_between_btns">
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
</style>
<style>
.flexForMobile {
    flex-direction: column;
    gap: 20px;
}
</style>
