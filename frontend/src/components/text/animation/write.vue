<script>

export default {
    props: ['start', 'delay'],
    data() {
        return {
            text: [],
            tags: null,
            should_start: this.start == undefined ? false : this.start,
            delay_to_start: this.delay == undefined ? 0 : this.delay,
        }
    },
    computed: {

    },
    methods: {
        get_children(child) {
            let html=child.innerHTML;
            this.tags = this.getChildrenTags(child);
            this.text = this.getChildrenLetters(child);
        },

        sleep(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        },

        getChildrenTags(child) {
            let html=child.innerHTML;
            let flag=false;
            let value='';
            for (let index = 0; index < html.length; index++) {
                if (html[index] == '<') {
                    flag=true;
                }
                if (flag == true){
                    value+=html[index];
                }
                if (html[index] == '>') {
                    flag=false;
                }
            }
            return value;
        },

        getChildrenLetters(elem) {
            let child= elem.children;
            let letters=[];
            if (child.length > 0) {
                for (let i = 0; i < child.length; i++) {
                    letters.push(this.getChildrenLetters(child[i]));
                }
            } else {
                if (elem.tagName == "SPAN") {
                    letters.push(elem.innerText);
                }
            }
            return letters;
        },

        getText(text, index){
            let t = text[index[0]];
            if (index.length > 1) {
                return this.getText(t, index.slice(1));
            } else {
                return t[0];
            }
        },

        writeHiddenLetters(elem, t) {
            for (let index = 0; index < t.length; index++) {
                var letter = t[index];
                if (letter == ' ') { letter = '&nbsp;'; }
                elem.innerHTML += '<span class="letter invisibleLetter">' + letter + '</span>';
            }
        },
        overwriteHiddenChilds(elem, index=[]) {
            let child= elem.children;
            if (child.length > 0) {
                for (let i = 0; i < child.length; i++) {
                    let id = [...index];
                    id.push(i);
                    this.overwriteHiddenChilds(child[i], id);
                }
            } else {
                if (elem.tagName == "SPAN") {
                    let t = this.getText(this.text, index);
                    this.writeHiddenLetters(elem, t);
                }
            }
        },

        appendCursorToFirstHidden(container) {
            let cursor = container.querySelectorAll('.cursor')[0];
            if (cursor != undefined) cursor.classList.remove('cursor');

            let first_letter = container.querySelectorAll('.invisibleLetter')[0];
            if (first_letter != undefined)  first_letter.classList.add('cursor');
        },

        async showChildsOneAtTheTime(container) {
            let letters = container.querySelectorAll('span.invisibleLetter');
            for (let index = 0; index < letters.length; index++) {
                this.appendCursorToFirstHidden(container);
                await this.sleep(75);
                letters[index].classList.remove('invisibleLetter');
            }
            this.appendCursorToFirstHidden(container);
        },

        async init_write() {
            let to_write = document.getElementsByClassName("writer_animation")[0];
            this.get_children(to_write);

            to_write.innerHTML = this.tags;

            this.overwriteHiddenChilds(to_write);

            while (this.should_start != true) {
                await this.sleep(10);
            }
            this.appendCursorToFirstHidden(to_write);
            await this.sleep(this.delay_to_start);
            await this.showChildsOneAtTheTime(to_write);
            this.$emit('animation_finished', true);
        }
    },
    mounted() {
        this.init_write();
    },
}
</script>


<template>
    <div class="writer_animation">
        <slot/>
    </div>
</template>

<style>
.invisibleLetter {
    color: transparent;
}
.cursor {
   border-left: 1px solid #fff;

  animation: blink-animation 0.7s steps(5, start) infinite;
  -webkit-animation: blink-animation 0.7s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
   border-left: 1px solid transparent;
  }
}
@-webkit-keyframes blink-animation {
  to {
   border-left: 1px solid transparent;
  }
}
</style>
