function digitPerkalianMinimum(angka) {
    // you can only write your code here!
      var faktor=[]
      var pasanganFaktor=[]
      var joinFaktor=[]
      var joinFaktorLength=[]
      var perkalian=0
  
        for(var i=1; i<=angka; i++){
          if(angka%i == 0){
              faktor.push(i)
          }
        }
      var length= faktor.length-1
        for(var j=0; j<faktor.length/2; j++){
        pasanganFaktor.push([faktor[j], faktor[length-j]]
          )}
        
      
  
      for(var k=0; k<pasanganFaktor.length; k++){
            joinFaktor.push(pasanganFaktor[k].join(''))
        }
      
      for(l=0; l<joinFaktor.length; l++){
        joinFaktorLength.push(joinFaktor[l].length)
      }
  
      var sortFaktorLength = joinFaktorLength.sort()
      
      for(var m=0; m<sortFaktorLength.length; m++){
        if(sortFaktorLength[0] == sortFaktorLength[m]){
          perkalian++
        }
      }
  
      
      
      return perkalian
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2