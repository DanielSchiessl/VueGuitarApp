<template>
    <div id="scalemodeselection">
        <p>Select the scale mode that is to be used:</p>
        <div class="wrapper">
            <button v-for="(mode, modeindex) in modenames" class="modebutton" :key="modeindex" :style="{'grid-row': 1,'grid-column': modeindex+1}" :id="mode" v-on:click="select($event)">
                {{mode}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'scalemodeselector',
    emits: ['changeScaleMode'], // just for documentation (?)
    methods: {
        select: function (event) {
            var scaleMode = event.currentTarget.id // the ID is equal to the scale mode name to be used
            // console.log(scaleMode) // the ID is equal to the scale mode name to be used
            this.$emit('changeScaleMode', scaleMode)
        }
    },
    data () {
        return {
            modenames: ['ionian (major)', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'aeolian (minor)', 'locrian']
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

.modebutton {
    width: 150px;
    font-size : 20px;
    font-family: Calibri;
}
</style>
