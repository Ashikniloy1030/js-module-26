// `` দিয়ে অনেক ধরনের কাজ সহজে করা যায়।
// Backtick ব্যবহার করলে ${} দিয়ে variable বসানো যায়।

// const firstName = 'Ashik';
// const lastName = 'Niloy'
// const fullName = `'My full name is' ${firstName} ${lastName}`
// console.log(fullName);
// terminal-->'My full name is' Ashik Niloy

// const math = `${10+20+20}`
// console.log(math);
//terminal--> 50


// const mathAndMultiply = `${10+20} ${2*5}`
// console.log(mathAndMultiply);
// Terminal--> 30 10



/* 🔷 Template String (Template Literal) in JavaScript

JavaScript-এ Template String (বা Template Literal) হলো এমন একটি আধুনিক string লেখার পদ্ধতি, যেখানে আমরা backtick (`` ``) ব্যবহার করি।

এটি ES6 (ECMAScript 2015) থেকে এসেছে এবং string নিয়ে কাজ অনেক সহজ করে দিয়েছে।
*/

function getCardHtml (name, description, price){
  const div = `
      <div class= "card">
        <h2>${name}</h2>
        <p>${description}</p>
        <p>${price}</p>
        
      </div>
  `;
  console.log(div);
}
const details = getCardHtml('Oppo', 'this is best for camera', 50000);


//Backtick ব্যবহার করলে একাধিক লাইনের string লেখা যায়।
const text = ` Hi i am Ashik 
My last name Niloy
and i am good boy
i am a business man
`
console.log(text);