<script>
import buttonColumn from '../components/buttons/buttons_col.vue';
import flexMiddle from '../components/flex/flex_middle.vue';
import fill_window from '../components/fill_window.vue';
import vue_footer from '../components/footer.vue';

import write from '../components/text/animation/write.vue';
import blue_text from '../components/text/blue.vue';

export default {
    props: ['screenSize'],
    components: {
        buttonColumn,
        flexMiddle,
        fill_window,
        vue_footer,
        write,
        blue_text,
    },
    data() {
        return {
        }
    },
    methods: {
        on_writeing_end() {
            let hiddenElements = document.querySelectorAll('.hiddenElement');
            console.log(hiddenElements);
            for (let i = 0; i < hiddenElements.length; i++) {
                hiddenElements[i].classList.add('show-me');
            }
            let blockedElement = document.querySelectorAll('.blockedElement');
            console.log(blockedElement);
            for (let i = 0; i < blockedElement.length; i++) {
                blockedElement[i].classList.add('show-me');
            }
        }
    }
}
</script>

<template>
    <fill_window>
        <flexMiddle :gap="70">
            <h1>
                <write @animation_finished="on_writeing_end" :start="true" :delay="1000">
                    <strong><blue_text>W</blue_text><span>elcome!</span></strong><br/>
                    <span>I’m </span><blue_text>K</blue_text><span>acper, web developer.</span>
                </write>
            </h1>
            <buttonColumn :size_of_btns="160" :gaps_between_btns="30" :screenSize="screenSize" class="hiddenElement" />
        </flexMiddle>
    </fill_window>

    <fill_window class="blockedElement">
        <fill_window :height="'80vh'">
        </fill_window>
        <fill_window :height="'20vh'">
            <vue_footer />
        </fill_window>
    </fill_window>
</template>

<style scoped>
h1 {
    text-align: center;
    color: #fff;
}
h1 strong, h1 strong span {
    font-size: 3.5rem;
    font-weight: bold;
}
</style>
<style>
.hiddenElement {
    opacity: 0;
    transition: opacity 1s ease-in-out;
    position: relative;
}
.blockedElement {
    display: none;
}

.show-me {
    opacity: 1;
    display: block;
}

.hiddenElement > * {
    position: absolute;
    top: -5vh;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.5s ease-out;
}
.show-me > * {
    top: 0px;
}
</style>
