class Translator {
  constructor(){
    this.alphabet = {
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

  

  turkishToEnglish(str) {
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
  }


  swapAlphabet(alphabet){
    var ret = {};
    for(var key in alphabet){
      ret[alphabet[key]] = key;
    }
    return ret;
  }

  alertMsg(msg){
    alert(msg);
  }

  latinToMorse(latin){
    let value = this.turkishToEnglish(latin);
    let output = '';
    for(let i = 0; i < value.length; i++){
      output += ` ${this.alphabet[value.charAt(i).toLowerCase()]}`;
    }
    return output.trim();
  }

  morseToLatin(morse){
    var morseAlphabet = this.swapAlphabet(this.alphabet);
    var lastCall = morse.split(" ");
    let output = '';
    for(let i = 0; i < lastCall.length; i++){
      if(morseAlphabet[lastCall[i]] != undefined){
        output += morseAlphabet[lastCall[i]]
      }
    }
    return output;
  }



}


