function checkAB(num) {
    // you can only write your code here!
  
    var indexA=[]
    var indexB=[]
    var jarak=[]
    
    for(var i=0; i<num.length; i++){
        if(num[i]== 'a'){
          indexA.push(i)
        }else if(num[i] == 'b'){
            indexB.push(i)
        }
    }
      for(var j=0; j<indexA.length; j++){
        for(var k=0; k<indexB.length; k++){
           var pengurangan= Math.abs(indexA[j]-indexB[k])
           jarak.push(pengurangan-1)
        }
      }
      
      var counter3=0
      for(l=0; l<jarak.length; l++){
        if(jarak[l]== 3){
          counter3++
        }
        }
        
      if(counter3==0){
        return false
      }else{
        return true
      }
  
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false