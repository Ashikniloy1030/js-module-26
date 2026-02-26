/*
Arrow Function হলো JavaScript এর একটা short syntax function, যা ES6 (2015) এ এসেছে।

এতে function শব্দের বদলে => ব্যবহার করা হয়।

multyline arrow function লিখা যায়, সে ক্ষেত্রে অটোমেটিক রিটার্ন করেনা আলাদা ভাবে রিটার্ন লিখে রিটার্ন করানো লাগে।
 */
const sum = (num1,num2) =>num1+num2;
console.log(sum(2,6));

const subtraction = (a, b) =>a-b;
console.log(subtraction(10,6));


//const sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// console.log(sum(5, 3)); 
// terminal-> 8

// 👉 এখানে {} ব্যবহার করেছি
// 👉 তাই return লিখতে হয়েছে