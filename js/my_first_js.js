 const array = [1, 3, 5, 7];

 function avg(arr) {
     let total = 0;
     for (let i = 0; i < arr.length; i++) {
         total = (total + arr[i]) / arr.length;
     };
     return total;
 };

console.log(avg(array));


// const array = [1, 3, 5, 7];
//
//  function avg(arr) {
//      let result;
//      let sum = 0;
//      for (let i = 0; i < arr.length; i++) {
//          sum += arr[i];
//      };
//      return result = sum / arr.length;
//  };
//
// console.log(avg(array));


// const array = [1, 3, 5, 7, -2, 0];
//
// function minMax(arr) {
//
//    let emptyArray = [];
//    let min = 0;
//    let max = min;
//
//    for (i = 1; i < arr.length; ++i) {
//        if (arr[i] > max) max = arr[i];
//        if (arr[i] < min) min = arr[i];
//    };
//
//     return emptyArray = [min, max]
// }
//
// console.log(minMax(array));