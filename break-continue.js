// break not going through over 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element > 5) {
    break;
  }
  console.log(element);
}

// for continue and ignore below 0
const numbers1 = [1, -2, 3, -4, 5, 6, -7, 8, 9];
for (let i = 0; i < numbers1.length; i++) {
  const element = numbers1[i];
  if (element < 0) {
    continue;
  }
  console.log(element);
}
