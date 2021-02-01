// const numbers = [2, 4, 6, 8, 10];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   output.push(result);
// }
// console.log(output);

// const numbers = [2, 4, 6, 8, 10];
// numbers.map(function (numbers, index, array) {
//     // We may get 3 parameter if we pass any function inside a -map-
//     console.log(index, array, numbers);
// });

function square(element) {
  return element * element;
}
// const square = element => element * element; arrow function

// const numbers = [2, 4, 6, 8, 10];
// const result = numbers.map(function (numbers) {
//   return numbers * numbers;
// });
// console.log(result);

// used arrow function below in MAP // output will show an array
const numbers = [2, 4, 6, 8, 10];
const result = numbers.map((numbers) => numbers * numbers);
console.log(result);


//filter and find almost same.. 
// used arrow function below for FILTER // filter's output will show an array
const element = [2, 4, 6, 8, 10];
const bigger = element.filter((x) => x > 5);
console.log(bigger);

// used arrow function below for FIND // output will show immidiate value but not array
const value = [2, 5, 6, 8, 9, 13];
const output = value.find((value) => value < 5);
console.log(output);
