<template>
  <div class="col-md-12">
          <div class="row">

            <div class="form-group col-md-6">
              <label for="morseAlphabet">Morse Alphabet</label>
              <textarea class="form-control rounded-5" id="morseAlphabet" v-model="morseText"  v-on:keyup="morseToLatin(morseText)" rows="10"></textarea>
            </div>

            <div class="form-group col-md-6">
              <label for="latinAlphabet">Latin Alphabet</label>
              <textarea class="form-control rounded-5" id="latinAlphabet" v-model="output" rows="10"></textarea>
              
            </div>
            
            
          </div>

        </div>
</template>

<script>

  export default {
    data: function() {
      return {
        morseText : '',
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
      swapAlphabet(alphabet){
        var ret = {};
        for(let key in alphabet){
          ret[alphabet[key]] = key;
        }
        return ret;
      },
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
      morseToLatin(morse){
        var morseAlphabet = this.swapAlphabet(this.alphabet);
        var lastCall = morse.split(" ");
        this.output = '';
        for(let i = 0; i < lastCall.length; i++){
          if(morseAlphabet[lastCall[i]] !== undefined){
            this.output += morseAlphabet[lastCall[i]]
          }
        }
        return this.output;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>