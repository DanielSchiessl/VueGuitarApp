<template>
    <div id="noteselection">
        <p>Select the root note that is to be used:</p>
        <div class="wrapper">
            <template v-for="(notename, noteindex) in notenames" :key=noteindex> <!-- use <template> as that is an empty container which will not be added to the DOM -->
                <button v-for="(sign, signindex) in signs" class="notebutton" :key="signindex" :style="{'grid-row': signindex+1,'grid-column': noteindex+1}">
                    {{notename}}{{sign}}
                </button>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'noteselector',
    data () {
        return {
            notenames: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
            signs: ['#', '', 'b']
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: inline-grid;
    grid-gap: 10px;
    background-color: #fff;
    color: #444;
    z-index: -1;  /* to be below the parent element */
    }

.notebutton {
    width: 60px;
    font-size : 20px;
    font-family: Calibri;
}
</style>
