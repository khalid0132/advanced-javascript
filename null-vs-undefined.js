// undefined
// let student;
// console.log(student);

function add(num1= 10, num2=10) {
  console.log(num1 + num2);
  //   return num1 * num2;            if we don't declare return then it will show undefined
}
const result = add(25);
console.log(result);

// undefined in object
const lover = { name: "Ridoy", age: 29, school: "vista Skolan" };
console.log(lover.address); // output undefined because address is not defined inside the object

const ages = [13, 15, 19];
console.log(ages[5]);

// Null: where we can specificly assigned value -null- instead of something or something has not valid now
