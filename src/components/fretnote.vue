<template>
    <div v-if="isScaleNoteInThreeNpsPattern || threenpsmodeactivated" class="note"> {{notename}} </div>
</template>

<script>
export default {
    name: 'fretnote',
    props: ['threenpsmodeactivated', 'threenpsstartdegree', 'stringno', 'notename', 'notescaledegree', 'notenbrabs', 'fretno', 'selectednpspattern'],
    computed: {
        threeNpsScaleDegreesOnThatString () {
            var targetScaleDegrees = [(this.threenpsstartdegree + this.stringno * 3) % 7, ((this.threenpsstartdegree + this.stringno * 3) - 1) % 7, ((this.threenpsstartdegree + this.stringno * 3) - 2) % 7]
            targetScaleDegrees[targetScaleDegrees.indexOf(0)] = 7 // we have to use %7 to get the scale degress but 7%7 is 0, so in that case reverse it back to 7
            return targetScaleDegrees
        },
        isScaleNoteInThreeNpsPattern () {
            if (this.threeNpsScaleDegreesOnThatString.includes(this.notescaledegree)) { return true } else { return false }
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
