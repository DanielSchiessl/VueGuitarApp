<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld Welcome to Your Vue.js App"/> -->
    <h1> VueJs Guitar App </h1>
     <!--  <noteselector></noteselector> -->

    <button id="show-modal" @click="showModal = true">Select Scale</button>
    <!-- use the modal component, pass in the prop -->
    <scaleselectormodal v-if="showModal" @close="showModal = false">
    </scaleselectormodal>

    <!-- <noteselectorv2></noteselectorv2> is now inside the modal component -->
    <!-- <scalemodeselector></scalemodeselector> is now inside the modal component -->
    <fretboard
        :showScaleNoteFunction=showScaleNoteFunction
        :isChordSelected=isChordSelected
        :showChordNoteFunction=showChordNoteFunction>
    </fretboard>
    <br>
    <button style="float: left" id="showScaleNoteFunction" @click="showScaleNoteFunction = !showScaleNoteFunction">Show Scale Note Function</button>
    <br>
    <hr>
    <p style="float: left"> Proposed Chords:</p>
    <br> <br> <br>
    <button style="float: left; font-weight: bold; font-size: 40px" id="selectChord" @click="isChordSelected = !isChordSelected">Em</button>
    <br> <br> <br>
        <button style="float: left" id="showChordNoteFunction" @click="showChordNoteFunction = !showChordNoteFunction">Show Chord Note Function</button>
    <br> <br> <br>
    <hr>

    <div>
        <p style="text-align: left">Feature ideas for next versions:</p>
        <ul style="text-align: left">
            <li style="text-align: left">Change view between note-name and note-function / scale-degree</li>
            <li style="text-align: left">Change string notes or complete tuning</li>
            <li style="text-align: left">Move all settings into modal(s)</li>
            <li style="text-align: left">Add (pentatonic) box selectors (just like 3NPS)</li>
            <li style="text-align: left">Metronome support</li>
            <li style="text-align: left">Random (Picking/Rhythom and Scale) exercise generator</li>
            <li style="text-align: left">Chord Selection (matching the selected scale) and overlay</li>
            <li style="text-align: left">Playback feature with chord preview</li>
            <li style="text-align: left">Practice progress and usage charts</li>
            <li style="text-align: left">Fixed orientation and size (especially for mobile devices)</li>
            <li style="text-align: left">Enrich PWA and use TWA?</li>
            <li style="text-align: left">Grid support detection (e.g. via Browser Version)</li>
            <li style="text-align: left">...</li>
        </ul>
    </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import noteselector from './components/noteselector.vue'
// import noteselectorv2 from './components/noteselectorv2.vue' --> is now inside the modal component
// import scalemodeselector from './components/scalemodeselector.vue' --> is now inside the modal component
import fretboard from './components/fretboard.vue'
import scaleselectormodal from './components/scaleselectormodal.vue'
// import fretnote from './components/fretnote.vue'

export default {
    name: 'App',
    data () {
        return {
            showModal: false,
            showScaleNoteFunction: false,
            isChordSelected: true,
            showChordNoteFunction: false
            // note_selected: 'C'
        }
    },
    components: {
        // HelloWorld,
        // fretnote,
        // noteselector,
        // noteselectorv2, --> is now inside the modal component
        // scalemodeselector, --> is now inside the modal component
        fretboard,
        scaleselectormodal
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
