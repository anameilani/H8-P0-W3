function ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'

      var tambahKata=''
  for(var i=0; i<kata.length; i++){
      for(var j=0; j<alphabet.length; j++){
           
        if(kata[i]== alphabet[j] && kata[i] != alphabet[alphabet.length-1]){
          tambahKata= tambahKata+ alphabet[j+1]
            
        }else if(kata[i] == alphabet[j] && kata[i] == alphabet[alphabet.length-1]){
          tambahKata += alphabet[0]
         
        }
        
      }
  }

  return tambahKata

}

// TEST CASES
console.log(ubahHuruf('woz')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu