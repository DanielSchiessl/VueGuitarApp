<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld Welcome to Your Vue.js App"/> -->
    <h1> VueJs Guitar App </h1>
     <!--  <noteselector></noteselector> -->
    <hr>

    <button v-on:click="updateScreenInformation()">
        getScreenInfo
    </button>

    <!-- Show some screen info for debugging ... -->
    <p style="font-weight: bold;">Screen Information</p>
    <p>{{screenResolution}}</p>
    <p>{{pixelRatio}}</p>
    <p>{{resultingScreenResolution}}</p>
    <p>{{screenOrientation}}</p>
    <hr>

    <button id="show-modal" @click="showModal = true">Select Scale</button>
    <!-- use the modal component, pass in the prop -->
    <scaleselectormodal v-if="showModal" @close="showModal = false">
    </scaleselectormodal>

    <!-- <noteselectorv2></noteselectorv2> is now inside the modal component -->
    <!-- <scalemodeselector></scalemodeselector> is now inside the modal component -->
    <fretboard
        :scale=scale
        :showScaleNoteFunction=showScaleNoteFunction
        :isChordSelected=isChordSelected
        :chord=chordSelected
        :showChordNoteFunction=showChordNoteFunction>
    </fretboard>
    <br>
    <button style="float: left" id="showScaleNoteFunction" @click="showScaleNoteFunction = !showScaleNoteFunction">Show Scale Note Function</button>
    <br>
    <hr>
    <p style="float: left"> Proposed Chords:</p>
    <br> <br> <br>

    <button v-for="chord in chords" :key=chord style="float: left; font-weight: bold; font-size: 40px"
        @click="toggleChords(chord)">
        {{chord.name}}
    </button>

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

console.log('starting up ...')
console.log(document.getElementById('app'))
console.log(screen.orientation)
if (document.documentElement.requestFullscreen) {
    document.getElementById('app').requestFullscreen()
    console.log('executing requestFullscreen() ...')
} else if (document.documentElement.webkitRequestFullScreen) {
    document.getElementById('app').webkitRequestFullScreen()
    console.log('executing webkitRequestFullScreen() ...')
}
if (screen.orientation.lock()) {
    screen.orientation.lock('landscape')
}

export default {
    name: 'App',
    data () {
        return {
            screenResolution: 'Screen Resolution: ' + screen.width + 'x' + screen.height,
            pixelRatio: 'PixelRatio / Zoom-Factor: ' + window.devicePixelRatio,
            resultingScreenResolution: 'Resulting Screen Resolution: ' + (window.screen.width * window.devicePixelRatio).toFixed(0) + 'x' + (window.screen.height * window.devicePixelRatio).toFixed(0),
            screenOrientation: 'Orientation: ' + screen.orientation.type + ' mode @ ' + screen.orientation.angle + '°',
            showModal: false,
            showScaleNoteFunction: false,
            isChordSelected: true,
            showChordNoteFunction: false,
            chordSelected: {
                name: 'D', // D as the default chord
                noteNames: ['D', 'F#', 'A'],
                noteNbrsAbs: [2, 6, 9],
                noteFunction: ['R', '3', '5']
            },
            scale: { // D major as the default scale
                noteNames: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
                noteNbrsAbs: [2, 4, 6, 7, 9, 11, 1],
                noteFunction: ['R', '2', 'M3', '4', '5', '6', 'M7']
            },
            chords: [
                {
                    name: 'D',
                    noteNames: ['D', 'F#', 'A'],
                    noteNbrsAbs: [2, 6, 9],
                    noteFunction: ['R', '3', '5']
                },
                {
                    name: 'Em',
                    noteNames: ['E', 'G', 'B'],
                    noteNbrsAbs: [4, 7, 11],
                    noteFunction: ['R', 'b3', '5']
                }
            ]
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
    },
    methods: {
        toggleChords: function (chord) {
            if (this.chordSelected === chord) {
                console.log('same chord')
                this.isChordSelected = !(this.isChordSelected)
            } else {
                console.log('another chord')
                this.chordSelected = chord
                this.isChordSelected = true
            }
        },
        updateScreenInformation: function () {
            this.screenResolution = 'Screen Resolution: ' + screen.width + 'x' + screen.height
            this.pixelRatio = 'PixelRatio / Zoom-Factor: ' + window.devicePixelRatio.toFixed(2)
            this.resultingScreenResolution = 'Resulting Screen Resolution: ' + (window.screen.width * window.devicePixelRatio).toFixed(0) + 'x' + (window.screen.height * window.devicePixelRatio).toFixed(0)
            this.screenOrientation = 'Orientation: ' + screen.orientation.type + ' mode @ ' + screen.orientation.angle + '°'
            if (document.documentElement.requestFullscreen) {
                document.getElementById('app').requestFullscreen()
                console.log('executing requestFullscreen() ...')
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.getElementById('app').webkitRequestFullScreen()
                console.log('executing webkitRequestFullScreen() ...')
            }
            if (screen.orientation.lock()) {
                screen.orientation.lock('landscape')
            }
        }
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
#app:fullscreen {
    background-color: rgb(255, 255, 255); /* the default fullscreen background color is black so we have to manually change it white with this rule */
    overflow-y: auto;  /* this allows scrolling even though being locked and in fullscreen mode */
    overflow-x: auto;
}
#app:-webkit-full-screen {
    background-color: rgb(255, 255, 255);/* the default fullscreen background color is black so we have to manually change it white with this rule */
    overflow-y: auto; /* this allows scrolling even though being locked and in fullscreen mode */
    overflow-x: auto;
}
body {
    margin: 40px;
}
</style>
