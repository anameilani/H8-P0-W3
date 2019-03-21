function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  let nameSepatu= []
  let amountSepatu = 0
  let nameBaju= []
  let amountBaju =0
  let nameSweater =[]
  let amountSweater =0

  for(i=0; i<shoppers.length; i++){
    if(shoppers[i].product == listBarang[0][0] ){
      if(listBarang[0][2]-amountSepatu >= shoppers[i].amount){
      nameSepatu.push(shoppers[i].name)
      amountSepatu = amountSepatu+ shoppers[i].amount
    }
    }else if(shoppers[i].product == listBarang[1][0] ){
      if(listBarang[1][2]-amountBaju >= shoppers[i].amount){
      nameBaju.push(shoppers[i].name)
      amountBaju = amountBaju+ shoppers[i].amount
      }
    }else if(shoppers[i].product == listBarang[2][0] ){
      if(listBarang[2][2]-amountSweater >= shoppers[i].amount){
      nameSweater.push(shoppers[i].name)
      amountSweater = amountSweater+ shoppers[i].amount
      }
    }
  }
    let finalResult= []
    if(shoppers.length ==0){
        return finalResult
    }else{
        finalResult.push({
          'product': listBarang[0][0],
          'shopper': nameSepatu,
          'leftOver': listBarang[0][2] - amountSepatu,
          'totalProfit': listBarang[0][1]*amountSepatu,
        })
              finalResult.push({
          'product': listBarang[1][0],
          'shopper': nameBaju,
          'leftOver': listBarang[1][2] - amountBaju,
          'totalProfit': listBarang[1][1]*amountBaju,
        })
      
        finalResult.push({
          'product': listBarang[2][0],
          'shopper': nameSweater,
          'leftOver': listBarang[2][2] - amountSweater,
          'totalProfit': listBarang[2][1]*amountSweater,
        })
        return finalResult
      }

}

// TEST CASES
//console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
//console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
//console.log(countProfit([]));  //[]
