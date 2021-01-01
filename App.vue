<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld Welcome to Your Vue.js App"/> -->
    <h1> VueJs Guitar App </h1>
     <!--  <noteselector></noteselector> -->
    <noteselectorv2></noteselectorv2>
    <scalemodeselector></scalemodeselector>
    <fretboard></fretboard>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import noteselector from './components/noteselector.vue'
import noteselectorv2 from './components/noteselectorv2.vue'
import scalemodeselector from './components/scalemodeselector.vue'
import fretboard from './components/fretboard.vue'
// import fretnote from './components/fretnote.vue'

export default {
    name: 'App',
    // data () {
    //    return {
    //        note_selected: 'C'
    //    }
    // },
    components: {
        // HelloWorld,
        // fretnote,
        // noteselector,
        noteselectorv2,
        scalemodeselector,
        fretboard
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

body {
    margin: 40px;
}

</style>
