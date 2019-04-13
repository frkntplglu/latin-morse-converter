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
        alphabet : {
          'a': '.-',
          'b': '-...',
          'c': '-.-.', 
          'd': '-..',
          'e': '.',
          'f': '..-.',
          'g': '--.',
          'h': '....',
          'i': '..',
          'j': '.---',
          'k': '-.-',
          'l': '.-..',
          'm': '--',
          'n': '-.',
          'o': '---',
          'p': '.--.',
          'q': '--.-',
          'r': '.-.',
          's': '...',
          't': '-',
          'u': '..-',
          'v': '...-',
          'w': '.--',
          'x': '-..-',
          'y': '-.--',
          'z': '--..',
          '1': '.----',
          '2': '..---',
          '3': '...--',
          '4': '....-',
          '5': '.....',
          '6': '-....',
          '7': '--...',
          '8': '---..',
          '9': '----.',
          '0': '-----',
          '.': '.-.-.-',
          ',': '--..--',
          '?': '..--..',
          "'": '.----.',
          '!': '-.-.--',
          '/': '-..-.',
          '(': '-.--.',
          ')': '-.--.-',
          '&': '.-...',
          ':': '---...',
          ';': '-.-.-.',
          '=': '-...-',
          '+': '.-.-.',
          '-': '-....-',
          '_': '..--.-',
          '"': '.-..-.',
          '$': '...-..-',
          '@': '.--.-.',
          ' ': '/'
        }
      }
    },
    methods : {
      turkishToEnglish(str){
        return str.replace('Ğ','g')
                  .replace('Ü','u')
                  .replace('Ş','s')
                  .replace('I','i')
                  .replace('İ','i')
                  .replace('Ö','o')
                  .replace('Ç','c')
                  .replace('ğ','g')
                  .replace('ü','u')
                  .replace('ş','s')
                  .replace('ı','i')
                  .replace('ö','o')
                  .replace('ç','c');
      },
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

<style lang="scss" scoped>

</style>