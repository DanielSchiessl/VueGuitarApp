<template>
    <div>
        <p>Fretboard for a {{strings.noteNames.length}}-string guitar with {{numberOfFrets}} frets</p>
        <div class="wrapper">
            <template v-for="(stringNoteNbrAbs, stringindex) in strings.noteNbrsAbs" :key=stringindex> <!-- iterate over all (6) strings | use <template> as that is an empty container which will not be added to the DOM -->
                <!-- fretsize should scale down linearly from 120 px to 40px -> reduce the 80 px delta in percent of fretNo -->
                <div v-for="fretNo in numberOfFrets" class="box" :key="fretNo" :style="{'width':120-80*((fretNo/numberOfFrets))+'px', 'grid-row': stringindex+1,'grid-column': fretNo}"> <!-- set the ID to be the respective noteNumber so we can update the same notes all at once -->
                    <fretnote
                        v-if="scale.noteNbrsAbs.includes((stringNoteNbrAbs+fretNo)%12)"
                        :showScaleNoteFunction=showScaleNoteFunction
                        :noteFunction="scale.noteFunction[scale.noteNbrsAbs.indexOf((stringNoteNbrAbs+fretNo)%12)]"
                        :notename="scale.noteNames[scale.noteNbrsAbs.indexOf((stringNoteNbrAbs+fretNo)%12)]"
                        :notescaledegree="1+scale.noteNbrsAbs.indexOf((stringNoteNbrAbs+fretNo)%12)"
                        :noteNbrAbs=(stringNoteNbrAbs+fretNo)%12
                        :fretno="fretNo"
                        :stringno="strings.noteNames.length-stringindex"
                        :threenpsstartdegree=threenpsstartdegree
                        :threenpsmodeactivated=threenpsmodeactivated
                        :isChordSelected=isChordSelected
                        :showChordNoteFunction=showChordNoteFunction
                        :chord=chord>
                    </fretnote>
                </div>
            </template>
            <div v-for="fretNo in numberOfFrets"
                :key=fretNo
                v-show="scale.noteNbrsAbs.includes((strings.noteNbrsAbs[strings.noteNbrsAbs.length-1]+fretNo)%12)"
                v-on:click="threenpsmodeactivated = !threenpsmodeactivated;
                            threenpsstartdegree = scale.noteNbrsAbs.indexOf((strings.noteNbrsAbs[strings.noteNbrsAbs.length-1]+fretNo)%12)"
                :style="{'grid-row': strings.noteNbrsAbs.length+1,'grid-column': fretNo, 'text-align': 'center'}">
                3NPS P{{1+scale.noteNbrsAbs.indexOf((strings.noteNbrsAbs[strings.noteNbrsAbs.length-1]+fretNo)%12)}}
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
    props: ['chord', 'showChordNoteFunction', 'isChordSelected', 'scale', 'showScaleNoteFunction'],
    data () {
        return {
            numberOfFrets: 24,
            threenpsstartdegree: 2,
            threenpsmodeactivated: true,
            strings: {
                noteNames: ['E', 'B', 'G', 'D', 'A', 'E'], // tuning of the guitar / instrument (reverse for top to bottom view) - actually not needed ... maybe later if we want to show the 0-fret / open-string name ...
                noteNbrsAbs: [4, 11, 7, 2, 9, 4] // tuning of the guitar / instrument (reverse for top to bottom view)
            }
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
    min-width: 40px;
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
