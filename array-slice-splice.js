//slice part
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = numbers.slice(1, 4); // index 1 theke index 4 er ag porjonto
console.log(part);
// console.log(numbers); // main array unchanged thakbe slice er thekre

//splice part
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const remove = numbers1.splice(2, 3);
const remove = numbers1.splice(2, 3, 77, 88); // index 2 theke 3 ta element delete and 77,88 add hobe
console.log(remove);
console.log(numbers1); // splice er jonno main arrayr value removed

// array join elements
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const together = numbers3.join(": ");
console.log(together);

//again kora kichu
const num = [1,3,4,17,6,5];
const show = num.splice(2,2,9, 99); // object 1 theke next 2 element show korbe
console.log(show);
console.log(num)