<script>
export default {
    props: ['gap', 'dir', 'fill', 'change_orientation'],
    data() {
        return {
            width: 'auto',
            height: 'auto',
            orientation: (this.dir ? this.dir : 'column'),
        }
    },
    computed: {
        cssVars () {
            return {
                '--direction': (this.change_orientation == true? (this.orientation =='row'?'column':'row') : this.orientation),
                // '--direction': this.orientation,
                '--width': this.width,
                '--height': this.height,
                '--gap': (this.gap) + (isNaN(this.gap)?'':"px"),
            }
        }
    },
    methods: {
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
</style>
