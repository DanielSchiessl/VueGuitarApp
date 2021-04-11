<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <noteselectorv2 @changeRootNote="changeRootNoteInModal"></noteselectorv2>
                    <scalemodeselector @changeScaleMode="changeScaleModeInModal"></scalemodeselector>
                    <button class="modal-default-button" @click="$emit('close')">
                        OK
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
// do NOT import from ./components/xxx.vue as we import from inside modal.vue, which is already inside the "components" folder
import noteselectorv2 from './noteselectorv2.vue'
import scalemodeselector from './scalemodeselector.vue'

export default {
    name: 'scaleselectormodal',
    emits: ['newScaleInformationReceived', 'close'], // just for documentation (?)
    components: {
        noteselectorv2,
        scalemodeselector
    },
    methods: {
        changeRootNoteInModal (newRootNote) {
            console.log('received new rootnote')
            this.scaleInformation.rootNote = newRootNote
            console.log(this.scaleInformation)
            this.$emit('newScaleInformationReceived', this.scaleInformation)
            // TODO send this back to the main app so it can from there then send a new request to our flask backend
        },
        changeScaleModeInModal (newScaleMode) {
            console.log('received new scale mode')
            this.scaleInformation.scaleMode = newScaleMode
            console.log(this.scaleInformation)
            this.$emit('newScaleInformationReceived', this.scaleInformation)
            // TODO send this back to the main app so it can from there then send a new request to our flask backend
        }
    },
    data () {
        return {
            scaleInformation: { rootNote: 'C', scaleMode: 'dorian' }
        }
    }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}
</style>
