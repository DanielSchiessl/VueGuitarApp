<template>
    <p>Select the root note that is to be used:</p>
    <table style="margin-left: auto; margin-right: auto" class="tg">
        <thead>
            <tr>
                <th class="tg-0lax">No.</th>
                <th class="tg-0lax">1</th>
                <th class="tg-0lax">2</th>
                <th class="tg-0lax">3</th>
                <th class="tg-0lax">4</th>
                <th class="tg-0lax">5</th>
                <th class="tg-0lax">6</th>
                <th class="tg-0lax">7</th>
                <th class="tg-0lax">8</th>
                <th class="tg-0lax">9</th>
                <th class="tg-0lax">10</th>
                <th class="tg-0lax">11</th>
                <th class="tg-0lax">12</th>
                <th class="tg-0lax">1</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="tg-0lax" style="font-weight: bold">Note</td>
                <td class="tg-0lax"><button style="font-weight: bold; font-size: 40px" class="notebutton" id="C" v-on:click="select($event)">C</button></td>
                <td class="tg-0lax"><button class="notebutton" id="C#" v-on:click="select($event)">C#</button><button class="notebutton" id="Db" v-on:click="select($event)">Db</button></td>
                <td class="tg-0lax"><button style="font-weight: bold; font-size: 40px" class="notebutton" id="D" v-on:click="select($event)">D</button></td>
                <td class="tg-0lax"><button class="notebutton" id="D#" v-on:click="select($event)">D#</button><button class="notebutton" id="Eb" v-on:click="select($event)">Eb</button></td>
                <td class="tg-0lax"><button style="font-weight: bold; font-size: 40px" class="notebutton" id="E" v-on:click="select($event)">E</button></td>
                <td class="tg-0lax"><button style="font-weight: bold; font-size: 40px" class="notebutton" id="F" v-on:click="select($event)">F</button></td>
                <td class="tg-0lax"><button class="notebutton" id="F#" v-on:click="select($event)">F#</button><button class="notebutton" id="Gb" v-on:click="select($event)">Gb</button></td>
                <td class="tg-0lax"><button style="font-weight: bold; font-size: 40px" class="notebutton" id="G" v-on:click="select($event)">G</button></td>
                <td class="tg-0lax"><button class="notebutton" id="G#" v-on:click="select($event)">G#</button><button class="notebutton" id="Ab" v-on:click="select($event)">Ab</button></td>
                <td class="tg-0lax"><button style="font-weight: bold; font-size: 40px" class="notebutton" id="A" v-on:click="select($event)">A</button></td>
                <td class="tg-0lax"><button class="notebutton" id="A#" v-on:click="select($event)">A#</button><button class="notebutton" id="Bb" v-on:click="select($event)">Bb</button></td>
                <td class="tg-0lax"><button style="font-weight: bold; font-size: 40px" class="notebutton" id="B" v-on:click="select($event)">B</button></td>
                <td class="tg-0lax"><button style="font-weight: bold; font-size: 40px" class="notebutton" id="C" v-on:click="select($event)">C</button></td>
            </tr>
            <tr>
                <td></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"><button class="notebutton" id="Fb" v-on:click="select($event)">Fb</button></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"></td>
                <td class="tg-0lax"><button class="notebutton" id="Cb" v-on:click="select($event)">Cb</button></td>
                <td class="tg-0lax"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'noteselectorv2',
    emits: ['changeRootNote'], // just for documentation (?)
    methods: {
        select: function (event) {
            var rootNote = event.currentTarget.id // the ID is equal to the notename to be used
            // console.log('change at component level') // the ID is equal to the notename to be used
            // console.log(rootNote) // the ID is equal to the notename to be used
            this.$emit('changeRootNote', rootNote)
        }
    }
}
</script>

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;width:1000px}
.tg td{border-right: solid 1px grey; border-bottom: solid 1px grey;
  border-left: solid 1px grey;font-family:Arial, sans-serif;font-size:20px;
  overflow:hidden;padding:10px 5px;word-break:normal;width:5%}
.tg th{border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:20px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;width:5%}
.tg .tg-0lax{text-align:center;vertical-align:center;width:5%}
.notebutton {
    width: 60px;
    font-size : 20px;
    font-family: Calibri;
}
</style>
