<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld Welcome to Your Vue.js App"/> -->
    <h1> VueJS based Guitar Scale Practice App </h1>
    <fretboard></fretboard>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import fretboard from './components/fretboard.vue'
// import fretnote from './components/fretnote.vue'

export default {
    name: 'App',
    components: {
        // HelloWorld,
        // fretnote,
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
