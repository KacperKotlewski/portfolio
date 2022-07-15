<script>
import buttonColumn from '../components/buttons/buttons_col.vue';
import flexMiddle from '../components/flex/flex_middle.vue';
import fill_window from '../components/fill_window.vue';
import vue_footer from '../components/footer.vue';
import contact_form from '../components/contact_form.vue';

import write from '../components/text/animation/write.vue';
import blue_text from '../components/text/blue.vue';
import { registerRuntimeHelpers } from '@vue/compiler-core';

export default {
    props: ['screenSize'],
    components: {
        buttonColumn,
        flexMiddle,
        fill_window,
        vue_footer,
        write,
        blue_text,
        contact_form,
    },
    data() {
        return {
            is_mobile: this.screenSize.width < 768,
            views: ['Welcome', 'Contact'],
        }
    },
    methods: {
        scrollToElement(id) {
            const el = document.querySelector(`#${id}`);
            el.scrollIntoView({behavior: "smooth"});
        },
        on_writeing_end() {
            let hiddenElements = document.querySelectorAll('.hiddenElement');
            for (let i = 0; i < hiddenElements.length; i++) {
                hiddenElements[i].classList.add('show-me');
            }

            let blockedElement = document.querySelectorAll('.blockedElement');
            for (let i = 0; i < blockedElement.length; i++) {
                blockedElement[i].classList.add('show-me');
            }
        },
        on_click_hidden_link(event) {
            let parent = event.target.parentNode;;
            while (parent != document.body) {
                parent = parent.parentNode;
                if (parent.classList.contains('hiddenElement') && !parent.classList.contains('show-me')) {
                    event.preventDefault();
                    return;
                }
            }
        },
    },
    mounted() {
        window.addEventListener('click', this.on_click_hidden_link);
    },
}
</script>

<template>
    <nav id="sideScroll" class="hiddenElement">
        <li v-for="item in views" @click="scrollToElement(item)"><i class="bi bi-record-circle-fill"></i><span>{{ item }}</span></li>
    </nav>
    <fill_window  :id="views[0]" class="view_site">
        <flexMiddle :gap="70" >
            <header>
                <write @animation_finished="on_writeing_end" :start="true" :delay="1000">
                    <strong><blue_text>W</blue_text><span>elcome!</span></strong><br/>
                    <h1 class="subtitle">
                        <flexMiddle :dir="'row'" :change_orientation="is_mobile">
                            <span><span>I am </span><blue_text>K</blue_text><span>acper,</span></span>
                            <span>&nbsp;web developer.</span>
                        </flexMiddle>
                    </h1>
                </write>
            </header>
            <buttonColumn id="welcome_buttons" :size_of_btns="160" :gaps_between_btns="30" :screenSize="screenSize" class="hiddenElement top" />
        </flexMiddle>
    </fill_window>

    <fill_window :id="views[1]" class="blockedElement main_view">
        <fill_window :height="'20vh'" style="display: flex; align-items:flex-end; justify-content:center;">
                <h2>
                    <strong><blue_text>C</blue_text><span>ontact</span></strong><br/>
                </h2>
        </fill_window>
        <fill_window :height="'65vh'" style="overflow:hidden;">
            <flexMiddle id="contact_flex" :dir="'row'">
                <contact_form/>
            </flexMiddle>
        </fill_window>
        <vue_footer />
    </fill_window>
</template>

<style scoped>
header {
    text-align: center;
    color: #fff;

}
header strong, header strong span {
    font-size: 3.5rem;
    font-weight: bold;
}
h2 {
    text-align: center;
    color: #fff;
}
h2 strong, h2 strong span {
    font-size: 3rem;
}
#contact_flex a{
    text-decoration: none;
    color: #0ae1c1;
    font-size: 1.5rem;
}
@media screen and (max-width: 768px) {
    #contact_flex a{
        font-size: 1.2rem;
    }
}
nav#sideScroll {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 2vh;
    margin-left: 1rem;
    list-style: none;
}
nav#sideScroll li {
    position: relative;
    cursor: pointer;
}
nav#sideScroll i {
    color: #0ae1c1;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
}
nav#sideScroll span {
    position: absolute;
    font-size: 1.5rem;
    background-color: #000;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    top: 40%;
    left: 2rem;
    transform: translate(0%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: none;
}
nav#sideScroll li:hover i {
    opacity: 1;
}
nav#sideScroll li:hover span {
    opacity: 1;
    display: block;
}
</style>
<style>

.hiddenElement {
    opacity: 0;
    transition: opacity 1s ease-in-out;
    /* position: relative; */
}
.blockedElement {
    display: none;
}

.show-me {
    opacity: 1;
    display: block;
}
.hiddenElement a {
    cursor: default;
}
.show-me a {
    cursor: pointer;
}


</style>
