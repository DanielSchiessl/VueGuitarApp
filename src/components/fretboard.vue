<template>
    <div id="app">
        <p>Fretboard for a {{strings.NoteNames.length}}-string guitar with {{numberOfFrets}} frets</p>
        <div class="wrapper">
            <template v-for="(stringNoteNbrAbs, stringindex) in strings.NoteNbrsAbs" :key=stringindex> <!-- iterate over all (6) strings | use <template> as that is an empty container which will not be added to the DOM -->
                <div v-for="fretNo in numberOfFrets" class="box" :key="fretNo" :style="{'grid-row': stringindex+1,'grid-column': fretNo}"> <!-- set the ID to be the respective noteNumber so we can update the same notes all at once -->
                    <fretnote
                        v-if="scale.NoteNbrsAbs.includes((stringNoteNbrAbs+fretNo)%12)"
                        :notename="scale.NoteNames[scale.NoteNbrsAbs.indexOf((stringNoteNbrAbs+fretNo)%12)]"
                        :notescaledegree="1+scale.NoteNbrsAbs.indexOf((stringNoteNbrAbs+fretNo)%12)"
                        :notenbrabs=(stringNoteNbrAbs+fretNo)%12
                        :fretno="fretNo"
                        :stringno="strings.NoteNames.length-stringindex"
                        :threenpsstartdegree=threenpsstartdegree
                        :threenpsmodeactivated=threenpsmodeactivated>
                    </fretnote>
                </div>
            </template>
            <div v-for="fretNo in numberOfFrets"
                :key=fretNo
                v-show="scale.NoteNbrsAbs.includes((strings.NoteNbrsAbs[strings.NoteNbrsAbs.length-1]+fretNo)%12)"
                v-on:click="threenpsmodeactivated = !threenpsmodeactivated;
                            threenpsstartdegree = scale.NoteNbrsAbs.indexOf((strings.NoteNbrsAbs[strings.NoteNbrsAbs.length-1]+fretNo)%12)"
                :style="{'grid-row': strings.NoteNbrsAbs.length+1,'grid-column': fretNo, 'text-align': 'center'}">
                3NPS P{{1+scale.NoteNbrsAbs.indexOf((strings.NoteNbrsAbs[strings.NoteNbrsAbs.length-1]+fretNo)%12)}}
            </div>
        </div>
    </div>
</template>

<script>
import fretnote from './fretnote.vue' // do NOT import from ./components/fretnote.vue as we import from inside freatboard.vue, which is already inside the "components" folder

export default {
    name: 'fretboard',
    components: {
        fretnote
    },
    props: {
        msg: String
    },
    data () {
        return {
            numberOfFrets: 24,
            threenpsstartdegree: 2,
            threenpsmodeactivated: true,
            strings: {
                NoteNames: ['E', 'B', 'G', 'D', 'A', 'E'], // tuning of the guitar / instrument (reverse for top to bottom view) - actually not needed ... maybe later if we want to show the 0-fret / open-string name ...
                NoteNbrsAbs: [4, 11, 7, 2, 9, 4] // tuning of the guitar / instrument (reverse for top to bottom view)
            },
            // notes:[["C","B#","Dbb"],["C#","Db",],["D","Ebb"],["D#","Eb"],["E","Fb"],["F","E#","Gbb"],["F#","Gb"],["G","Abb"],["G#","Ab"],["A","Bbb"],["A#","Bb"],["B","Cb"]],
            scale: {
                NoteNames: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
                NoteNbrsAbs: [2, 4, 6, 7, 9, 11, 1]
            },
            chordNotes: []
        }
    }
}
</script>

<style scoped>

.wrapper {
    display: inline-grid;
    grid-gap: 0px;
    background-color: #fff;
    color: #444;
    z-index: -1;  /* to be below the parent element */
  }

.box {
    background-color: rgb(160, 110, 80);
    color: #fff;
    padding: 20px;
    min-width: 50px;
    font-size: 150%;
    justify-content: center;
    align-items: center;
    border-right: 5px solid black;
    border-left: 5px solid black;
    display: flex; /* so the note-circle can be centered on that fret*/
    position: relative;
    z-index: 1;  /* to be below the parent element */
}

.box::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    border-top: 10px solid silver;
    width: 100%;
    transform: translateY(-50%);
    z-index: 1;  /* to be below the parent element */
}

</style>
