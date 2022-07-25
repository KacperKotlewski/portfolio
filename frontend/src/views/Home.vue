<script>
import fill_window from '../components/containers/fill_window.vue';
import navbar_on_side from '../components/sections/navbar_on_side.vue';

import welcome from './home_views/welcome.vue';
import vue_footer from '../components/sections/footer.vue';
import contact from './home_views/contact.vue';
import in_build from './in_build.vue';

import { registerRuntimeHelpers } from '@vue/compiler-core';

export default {
    props: ['screenSize'],
    components: {
        fill_window,
        navbar_on_side,

        vue_footer,
        in_build,
        welcome,
        contact,
    },
    data() {
        return {
            views: {
                'slide_0':{
                    "name":'Welcome',
                    "component": welcome,
                    "active": true,
                    },
                'slide_1':{
                    "name":'In Progress',
                    "component": in_build,
                    "active": false,
                    },
                },
        }
    },
    computed: {
        is_mobile() { return this.screenSize.width < 768 },
    },
    methods: {
        on_welcome_animation_end() {
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
    <navbar_on_side :views="null"/>

    <fill_window  id="slide_0">
        <welcome @animation_finished="on_welcome_animation_end"/>
    </fill_window>

    <!-- <in_build id="slide_1" class="blockedElement"/> -->
    <vue_footer class="blockedElement hiddenElement"/>
</template>

<style lang="scss">

.hiddenElement {
    opacity: 0;
    transition: opacity 1s ease-in-out;
    a {
        cursor: default;
    }
}
.blockedElement {
    display: none;
}
.show-me {
    opacity: 1;
    display: block;
    a {
        cursor: pointer;
    }
}
h2 {
    text-align: center;
    color: #fff;
    strong, strong span {
        font-size: 3rem;
    }
}
</style>
