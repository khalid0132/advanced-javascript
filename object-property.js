// // Module 23_ 5 and 23_6 (Map, filter, find, object property)

// const students = [
//   { id: 2014, name: "safwaan" },
//   { id: 2015, name: "safreen" },
//   { id: 2019, name: "maria" },
//   { id: 1982, name: "khalid" },
//   { id: 1985, name: "jinu" },
// ];

// // const students1 = [];
// // for (let i = 0; i < students.length; i++) {
// //   const element = students[i];
// //   // students1.push(element.id);
// //   students1.push(element.name);
// // }
// // console.log(students1);

// // we separeted id and name by using MAP
// const names = students.map((n) => n.name);
// console.log(names);

// const mapping = students.map((rollNumber) => rollNumber.id);
// console.log(mapping);

// const filtering = students.filter((s) => s.id > 2010);
// console.log(filtering);

// const finding = students.find((s) => s.id > 2014);
// console.log(finding);
// // const roll = students.map(function (rollNumber) {
// //   return rollNumber.id;
// // });
// // console.log(roll);

// own new 
//map
const members = [
  { id: 1, name: "safwaan" },
  { id: 2, name: "safreen" },
  { id: 3, name: "samreen" },
  { id: 4, name: "jesmin" },
  { id: 5, name: "khalid" },
];
const member1 = members.map((mem) => mem.name);
console.log(member1);
const member2 = members.map((mem) => {
  return mem.id; //{} dewar jonno return likhtei hobe. na hole error or undefine dekhane
});
console.log(member2);

// forEach only output dibe, kono array dibe na
const memberForEach = members.forEach((mem) => console.log(mem.name));


// Filter mainly comparison er jonno valo kaj kore. aikhane id 3 er niche joto gulo ache sei gulo show korbe
const memberFilter = members.filter(val => val.id < 3);
// const memberFilter = members.filter(val => val.id === 3);
console.log(memberFilter);

const memberFind = members.find(m => m.name === 'khalid');
console.log('find', memberFind);