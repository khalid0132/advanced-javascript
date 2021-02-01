// HEISTING inside/outside of scope by using var
// no heisting if we use const or let
// MODULE 23_7

const bonus = 20; // global var ke amra scope er vitor and baire use korte pari
function sum(first, second) {
  const result = first + second + bonus;
  if (result > 9) {
    var glad = "happy"; // var use korae heisting hoe output show korche
  } // but const or let dile ai if scope er baire output error dekhato
  console.log(glad);
  return result;
}
const output = sum(3, 7);
console.log(output);
console.log(bonus);
// console.log(output);
