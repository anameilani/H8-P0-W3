function urutkanAbjad(str) {
  // you can only write your code here!
   var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

        var kata=''

      for(var i=0; i<alphabet.length; i++){
        for(var j=0; j<str.length; j++){
          if(alphabet[i]== str[j]){
              kata=kata+str[j]
          }
        }
      }
      return kata
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'