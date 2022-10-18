// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let num1 = 20

num1.toString()

console.log(num1.toString())

// Write a JavaScript program to convert a string to the number.


const strToNum = (str) => {
  return parseInt(str)
}

strToNum()

// console.log(str.toString())

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
let boo = true
let no = null
let nah = undefined
let newNumber = 30
let notaNumber = NaN
let anotherString = "words"

console.log(typeof boo)

console.log(typeof no)

console.log(typeof nah)

console.log(typeof newNumber)

console.log(typeof notaNumber)

console.log(typeof anotherString)
  
// Write a JavaScript program that adds 2 numbers together.

const sumTwo = (x,y) => {
  x + y
  return(x+y)
} 

sumTwo()


// Write a JavaScript program that runs only when 2 things are true.

const andTrue = (a, b, c) => {
  if(a === c && b < a) {
    return true
  } else return false
}

andTrue()

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = (d, e, f) => {
  if(d === e || f > e) {
    return true
  } else return false
}

oneTrue()

// Write a JavaScript program that runs when both things are not true.  

const notTrue = (g, h, i) => {
  if(g + h && i === h) {
    return false
  } else return true
}

notTrue()

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
