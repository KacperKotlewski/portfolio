<script>
import flexMiddle from '../containers/flex_middle.vue';
import ButtonComp from './buttons.vue';

export default {
    components: {
        ButtonComp,
        flexMiddle,
    },
    props: ["gaps_between_btns", 'buttons'],
    computed: {
        cssVars () {
            return {
                '--size_of_btns': (768 - ((this.buttons.length+1)*this.gaps_between_btns))/this.buttons.length + "px",
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
        v-for="item in buttons"
        :text="item.text"
        :icon="item.icon"
        :link="item.link"
        :target="item.target"
        :type="item.type"
    />
</flexMiddle>
</div>
</template>

<style scoped>
a {
    width:var(--size_of_btns);
}

div.flex_box{
    justify-content: flex-start;
}

@media screen and (max-width: 768px) {
    div.flex_box {
        /* flex-direction: column; */
        justify-content: center;
    }
}
</style>
<style>

</style>
