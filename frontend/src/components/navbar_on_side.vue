<script>
export default {
    props: ['views'],
    methods: {
        scrollToElement(id) {
            const el = document.querySelector(`#${id}`);
            el.scrollIntoView({behavior: "smooth"});
        },
    }
}
</script>


<template>
    <nav id="sideScroll" class="hiddenElement">
        <template v-for="(value, name) in views">
            <li v-if="value.active" @click="scrollToElement(name)" >
                <i class="bi bi-record-circle-fill"></i>
                <span>{{ value.name }}</span>
            </li>
        </template>
    </nav>
</template>


<style scoped>
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

@media screen and (max-width: 768px) {
    nav#sideScroll {
        display: none;
    }
}
</style>
