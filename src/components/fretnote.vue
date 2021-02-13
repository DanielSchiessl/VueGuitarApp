<template>
    <div v-if="isScaleNoteInThreeNpsPattern || threenpsmodeactivated" class="note" v-bind:style="{opacity: calcOpacity}">
        <div v-if="isChordSelected">
                <div v-if="showChordNoteFunction">
                    {{getNoteNameInChord}}
                </div>
                <div v-else>
                    {{getNoteFunctionInChord}}
                </div>
        </div>
        <div v-else>
            <div v-if="showScaleNoteFunction">
                {{noteFunction}}
            </div>
            <div v-else>
                {{notename}}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'fretnote',
    props: ['isChordSelected', 'showChordNoteFunction', 'chord', 'showScaleNoteFunction', 'threenpsmodeactivated', 'threenpsstartdegree', 'stringno', 'notename', 'noteFunction', 'notescaledegree', 'noteNbrAbs', 'fretno', 'selectednpspattern'],
    data () {
        return {
            opacity: 1
        }
    },
    computed: {
        threeNpsScaleDegreesOnThatString () {
            var targetScaleDegrees = [(this.threenpsstartdegree + this.stringno * 3) % 7, ((this.threenpsstartdegree + this.stringno * 3) - 1) % 7, ((this.threenpsstartdegree + this.stringno * 3) - 2) % 7]
            targetScaleDegrees[targetScaleDegrees.indexOf(0)] = 7 // we have to use %7 to get the scale degress but 7%7 is 0, so in that case reverse it back to 7
            return targetScaleDegrees
        },
        isScaleNoteInThreeNpsPattern () {
            if (this.threeNpsScaleDegreesOnThatString.includes(this.notescaledegree)) { return true } else { return false }
        },
        calcOpacity () {
            if (this.isChordSelected) {
                if (this.chord.noteNbrsAbs.includes(this.noteNbrAbs)) {
                    return 1
                } else {
                    return 0.2
                }
            } else { // if no chord is selected show all scale notes
                return 1
            }
        },
        getNoteNameInChord () {
            return this.chord.noteNames[this.chord.noteNbrsAbs.indexOf(this.noteNbrAbs)]
        },
        getNoteFunctionInChord () {
            return this.chord.noteFunction[this.chord.noteNbrsAbs.indexOf(this.noteNbrAbs)]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note {
    background:red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height:40px;
    width:40px;
    z-index: 20;  /* to be below the parent element */
}
</style>
