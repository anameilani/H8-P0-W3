function ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

      var tambahKata=''
  for(var i=0; i<kata.length; i++){
      for(var j=0; j<alphabet.length; j++){
        if(kata[i]== alphabet[j]){
          tambahKata= tambahKata+ alphabet[j+1]
        }
      }
  }

  return tambahKata

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu