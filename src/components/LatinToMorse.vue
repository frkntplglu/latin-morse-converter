<template>
  <div class="col-md-12">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="latinAlphabet">Latin Alphabet</label>
              <textarea class="form-control rounded-5" id="latinAlphabet" v-model="latinText" v-on:keyup="latinToMorse(latinText)" rows="10"></textarea>
              
            </div>
            <div class="form-group col-md-6">
              <label for="morseAlphabet">Morse Alphabet</label>
              <textarea class="form-control rounded-5" readonly id="morseAlphabet" v-model="output" rows="10"></textarea>
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
        latinText : '',
        output : '',
      }
    },
    methods : {
      
      latinToMorse(latin){
        let value = converter.turkishToEnglish(latin);
        this.output = '';
        for(let i = 0; i < value.length; i++){
          if(converter.alphabet[value.charAt(i)] !== undefined){
            this.output += ` ${converter.alphabet[value.charAt(i).toLowerCase()]}`;
          }
        }
        return this.output.trim(); 
      }
    }
  }
</script>

<style scoped>

</style>