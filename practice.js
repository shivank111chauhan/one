// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

let arr = [1, 2, 3, 4, 5];
const output = arr.reduce((sum, currentvalue) => {
  return sum + currentvalue;
});

console.log(output);
