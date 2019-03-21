function digitPerkalianMinimum(angka) {
    // you can only write your code here!
      var faktor=[]
      var pasanganFaktor=[]
       
        for(var i=1; i<=angka; i++){
          if(angka%i == 0){
              faktor.push(i)
          }
        }
      var length= faktor.length-1
        for(var j=0; j<faktor.length/2; j++){
        pasanganFaktor.push((faktor[j].toString())+(faktor[length-j].toString())
          )}
      
      
      //Sorting
      for(var k=pasanganFaktor.length-1; k>=0; k--){
          for(var l=0; l<=k; l++){
            if(pasanganFaktor[l].length > pasanganFaktor[k].length){
                var tmp= pasanganFaktor[l]
                pasanganFaktor[l]= pasanganFaktor[k]
                pasanganFaktor[k]= tmp
            }
          }
      }

           
      
      return pasanganFaktor[0].length

  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2