// const max = Math.max (1, 2, 9, 4, 6, 4, 55)
// // console.log(max);

// const numbers = [6, 8, 9, 41, 52, 1, 15]
// const max2 = Math.max(...numbers);
// // console.log(max2);


// const params = [45, 62, 85]
// function sum (x, y, z){
//   // console.log(x, y, z);
//   return x + y + z;
// }
// const result = sum(...params)
// console.log(result);


//এই খানে দুইটা এরের মধ্যেই 4 ঢুকবে।
// const arr1 = [1, 2, 3];
// const arr2= arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);


//এই খানে পরের এরের মধ্যে 4 ঢুকবে। spread korar subidha --> ...
// const arr1 = [1, 2, 3];
// const arr2= [...arr1];
// const arr2= [...arr1, 4]; //এই ভাবেও এড করা যায়
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);


const person = {name:'alice', age:30};
const person2 = {...person};
person.salary= 25000;
console.log(person);
console.log(person2);