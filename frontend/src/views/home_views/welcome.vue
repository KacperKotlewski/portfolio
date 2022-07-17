<script>
import buttonColumn from '../../components/buttons/buttons_col.vue';
import flexMiddle from '../../components/flex/flex_middle.vue';
import fill_window from '../../components/fill_window.vue';

import write from '../../components/text/animation/write.vue';
import blue_text from '../../components/text/blue.vue';

export default {
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
        <buttonColumn id="welcome_buttons" :gaps_between_btns="30" class="hiddenElement top" />
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
