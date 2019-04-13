<template>
  <div class="col-md-12">
          <div class="row">

            <div class="form-group col-md-6">
              <label for="morseAlphabet">Morse Alphabet</label>
              <textarea class="form-control rounded-5" id="morseAlphabet" v-model="morseText"  v-on:keyup="morseToLatin(morseText)" rows="10"></textarea>
            </div>

            <div class="form-group col-md-6">
              <label for="latinAlphabet">Latin Alphabet</label>
              <textarea class="form-control rounded-5" id="latinAlphabet" readonly v-model="output" rows="10"></textarea>
              
            </div>
            <div class="col-md-12">
              You can type anything you want and the app will convert automatically.
            </div>
            
          </div>

        </div>
</template>

<script>
  import {Translator} from '../Translator';
  var converter = new Translator();

  export default {
    data: function() {
      return {
        morseText : '',
        output : '',
      }
    },
    methods : {
      morseToLatin(morse){
        var morseAlphabet = converter.swapAlphabet(converter.alphabet);
        var morseWithSpace = morse.split(" ");
        this.output = '';
        for(let i = 0; i < morseWithSpace.length; i++){
          if(morseAlphabet[morseWithSpace[i]] !== undefined){
            this.output += morseAlphabet[morseWithSpace[i]]
          }
        }
        return this.output;
      }
    }
  }
</script>

<style scoped>

</style>