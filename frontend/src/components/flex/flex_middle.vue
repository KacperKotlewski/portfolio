<script>
export default {
    props: ['gap', 'dir', 'fill', 'change_orientation', 'change_on_mobile'],
    data() {
        return {
            width: 'auto',
            height: 'auto',
            orientation: (this.dir ? this.dir : 'column'),
        }
    },
    computed: {
        final_orientation() {
            if (this.change_orientation == true)
                return this.reverseOrientation(this.orientation)
            else
                return this.orientation
        },
        cssVars () {
            return {
                '--direction': this.final_orientation,
                '--mobile-dir': (this.change_on_mobile == true? this.reverseOrientation(this.final_orientation) : this.final_orientation),
                // '--direction': this.orientation,
                '--width': this.width,
                '--height': this.height,
                '--gap': (this.gap) + (isNaN(this.gap)?'':"px"),
            }
        }
    },
    methods: {
        reverseOrientation(orientation) {
            return orientation =='row'?'column':'row';
        },
        getFill() {
            if (typeof(this.fill) == 'object') {
                this.setFill('x', this.fill.x);
                this.setFill('y', this.fill.y);
            }
            else
            {
                this.setFill('x', this.fill);
                this.setFill('y', this.fill);
            }
        },
        setFill(dimension, type) {
            let value = 'undefined';
            if (
                typeof(type) == 'undefined' ||
                type == 'fill'
            ) {
                value = '100%';
            }
            else if (type == 'auto' || type == 'none')
            {
                value = 'auto';
            }
            else{
                value = type;
            }

            if (dimension == 'x') {
                this.width= value;
            }
            else if (dimension == 'y') {
                this.height= value;
            }
        },
    },
    mounted:function(){
            this.getFill();
    },
}
</script>

<template>
    <div class="flex_box" :style="cssVars">
        <slot />
    </div>
</template>

<style scoped>
    div.flex_box{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: var(--direction);
        gap: var(--gap);

        width: var(--width);
        height: var(--height);
    }
    @media screen and (max-width: 768px) {
        div.flex_box{
            flex-direction: var(--mobile-dir);
        }
    }

</style>
