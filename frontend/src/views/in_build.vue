<script>
import flexMiddle from '../components/flex/flex_middle.vue';
import fill_window from '../components/fill_window.vue';
import blue_text from '../components/text/blue.vue';


export default {
    components: {
        fill_window,
        flexMiddle,
        blue_text,
    },
}
</script>


<template>
    <fill_window id="slide_1" class="blockedElement">

        <flexMiddle :dir="'column'">
            <fill_window :height="'10vh'">
                <h2>
                    <i><blue_text>C</blue_text><span>urrently</span></i><br/>
                    <strong><span>In </span><blue_text>B</blue_text><span>uild</span></strong><br/>
                </h2>
            </fill_window>
            <fill_window :height="'60vh'">
                <flexMiddle :dir="'row'" :gap="'4rem'">
                    <div id="gears">
                        <i class="bi bi-gear-fill right"></i>
                        <i class="bi bi-gear-fill left"></i>
                    </div>
                    <div id="gears">
                        <i class="bi bi-gear-fill right"></i>
                        <i class="bi bi-gear-fill left"></i>
                    </div>
                </flexMiddle>
            </fill_window>
            <fill_window :height="'10vh'">
                <flexMiddle>
                    <span>Come back later alligator</span>
                </flexMiddle>
            </fill_window>
        </flexMiddle>
    </fill_window>
</template>

<style scoped>

h2 {
    text-align: center;
    color: var(--color-text);
}
h2 strong, h2 strong span {
    font-size: 3rem;
}
h2 i, h2 i span {
    font-size: 2.4rem;
    font-style: normal;
}
#gears{
    position:relative;
}
#gears i{
    position:absolute;
    font-size: 3rem;
}
#gears i.right {
    color: var(--color-highlight);
    -webkit-animation: spin 4s infinite linear;
    top:-3rem;
    left:-2rem;
}
#gears i.left {
    top:-1rem;
    color: var(--color-background-muted);
    -webkit-animation: spin-opposite 4s infinite linear;
}

@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
@-moz-keyframes spin-opposite {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(-360deg); }
}
@-webkit-keyframes spin-opposite  {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(-360deg); }
}
@keyframes spin-opposite  {
    from {transform:rotate(0deg);}
    to {transform:rotate(-360deg);}
}
</style>
