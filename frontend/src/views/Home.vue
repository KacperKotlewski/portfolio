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
        }
    }
}
</script>

<template>
    <nav id="sideScroll" class="hiddenElement">
        <li @click="scrollToElement('welcome')"><i class="bi bi-record-circle-fill"></i><span>Welcome</span></li>
        <li @click="scrollToElement('footer')"><i class="bi bi-record-circle-fill"></i><span>Contact</span></li>
    </nav>
    <fill_window  id="welcome">
        <flexMiddle :gap="70" >
            <h1>
                <write @animation_finished="on_writeing_end" :start="true" :delay="1000">
                    <strong><blue_text>W</blue_text><span>elcome!</span></strong><br/>
                    <span>I’m </span><blue_text>K</blue_text><span>acper, web developer.</span>
                </write>
            </h1>
            <buttonColumn id="welcome_buttons" :size_of_btns="160" :gaps_between_btns="30" :screenSize="screenSize" class="hiddenElement top" />
        </flexMiddle>
    </fill_window>

    <fill_window id="footer" class="blockedElement">
        <fill_window :height="'80vh'">
            <div class="pageHeader">
                <h2>
                    <strong><blue_text>C</blue_text><span>ontact</span></strong><br/>
                </h2>
            </div>
            <flexMiddle>

            </flexMiddle>
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
h2 {
    text-align: center;
    color: #fff;
}
h2 strong, h2 strong span {
    font-size: 3.5rem;
}
.pageHeader{
    padding-top: 30px;
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
}
nav#sideScroll li:hover i {
    opacity: 1;
}
nav#sideScroll li:hover span {
    opacity: 1;
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
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.hiddenElement.top > * {
    top: -5vh;
    transition: top 0.5s ease-out;
}
.show-me.top > * {
    top: 0px;
}
.hiddenElement.left > * {
    left: -5vw;
    transition: top 0.5s ease-out;
}
.show-me.left > * {
    left: 50%;
}


</style>
