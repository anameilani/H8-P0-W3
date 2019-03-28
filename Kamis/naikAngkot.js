function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    
  
    if(arrPenumpang == undefined){
        return arrPenumpang
    }
  
    var perjalanan=[]
     
      for(var i=0; i<arrPenumpang.length; i++){
      var dataPenumpang={
          'penumpang': arrPenumpang[i][0],
          'naikDari': arrPenumpang[i][1],
          'tujuan': arrPenumpang[i][2],
          'biaya': tarif,  
      }
  
      var indexNaik= 0
      var indexTujuan= 0
      
       for(var j=0; j<rute.length; j++){
           if(arrPenumpang[i][1] === rute[j]){
               indexNaik = j
           }
           if(arrPenumpang[i][2]== rute[j]){
               indexTujuan = j
           }
       }
       
       var tarif= Math.abs(indexTujuan-indexNaik)*2000
       perjalanan.push(dataPenumpang)
       dataPenumpang.biaya= tarif    
    }
  
    return perjalanan
  
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'F', 'A'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]