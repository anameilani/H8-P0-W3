function changeVocals (str) {
  //code di sini
  var vocal= 'aeiou'
  var vocalplus='bfjpv'
    var words=''
  for(var i=0; i<str.length; i++){
        var found=false
      for(var j=0; j<vocal.length; j++){
          if(str[i]== vocal[j]){
              words= words+ vocalplus[j]
              found= true
          }
          if(str[i] == vocal[j].toUpperCase()){
              words= words+ vocalplus[j].toUpperCase()
              found= true
          }
      }
      if(found== false){
        words += str[i]
      }
  }

  return words
}

function reverseWord (str) {
  //code di sini
  var words=''
  for(var i=str.length-1; i>=0; i--){
      words= words+str[i]
  }
  return words
}

function setLowerUpperCase (str) {
  //code di sini
  var alphabet= 'abcdefghijklmnopqrstuvwxyz'
  var words=''
  for(var i=0; i<str.length; i++){
        var found= false
      for(var j=0; j<alphabet.length; j++){
      if(str[i] == alphabet[j]){
        words += alphabet[j].toLocaleUpperCase()
        found= true
      }
      if(str[i] == alphabet[j].toUpperCase()){
          words += alphabet[j]
          found= true
      }
    }
    if(found == false){
      words += str[i]
    }
    }
    return words
}

function removeSpaces (str) {
  //code di sini
  var words=[]
  for(var i=0; i<str.length; i++){
      if(str[i] != " "){
          words.push(str[i])
      }
  }

  return words.join('')

}

function passwordGenerator (name) {
  //code di sini
  if(name.length <5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }else{
  var vocal= changeVocals (name)
  var reserve= reverseWord (vocal)
  var lowerUpper= setLowerUpperCase (reserve)
  var space= removeSpaces (lowerUpper)

  return space
}
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
