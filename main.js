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


const numToString = (num1) => {
  return String(num1)

}

numToString()

const stringForm = document.getElementById("form") 

form.addEventListener("submit",e => {
  e.preventDefault()
  
  let num1 = document.getElementById("number").value
  console.log(String(num1))
  document.getElementById("numberToString").innerHTML = "The string is " + numToString(num1);
}) 

// Write a JavaScript program to convert a string to the number.


const strToNum = (str) => {
  return parseInt(str)
}

strToNum()

const parseForm = document.getElementById("formToNumber") 

parseForm.addEventListener("submit",e => {
  e.preventDefault()
  
  let str = document.getElementById("string").value
  console.log(parseInt(str))
  document.getElementById("stringToNumber").innerHTML = "The number is " + strToNum(str);
}) 


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
let testArray = [true, null, undefined, 30, NaN, 'words']

let boo = true
let no = null
let nah = undefined
let newNumber = 30
let notaNumber = NaN
let anotherString = "words"

const diffDataTypes = (testArray) => {
  // for (let i = 0; i < testArray.length; i++) {
  //   const testArray = testArray[i];
    
  // }
  return typeof testArray
}

diffDataTypes()

console.log(typeof boo)

console.log(typeof no)

console.log(typeof nah)

console.log(typeof newNumber)

console.log(typeof notaNumber)

console.log(typeof anotherString)
  
// Write a JavaScript program that adds 2 numbers together.

const sumTwo = (x,y) => {
  parseInt(x) + parseInt(y)
  return(parseInt(x) + parseInt(y))
} 

sumTwo()

const formAddition = document.getElementById("formAddNumber") 

formAddition.addEventListener("submit",e => {
  e.preventDefault()
  
  let x = document.getElementById("addOne").value
  let y = document.getElementById("addTwo").value

  
  document.getElementById("addNumbers").innerHTML = "My total is " + sumTwo(x,y);
}) 

// Write a JavaScript program that runs only when 2 things are true.

const andTrue = (a, b) => {
  if(a && b ) {
    return true
  } 
}

andTrue()

const formTwoTrue = document.getElementById("formBothTrue") 

formTwoTrue.addEventListener("submit",e => {
  e.preventDefault()
  
  let a = document.getElementById("thingOne").value
  let b = document.getElementById("thingTwo").value

  
  document.getElementById("checkBothTrue").innerHTML = "It's " + andTrue(a,b);
}) 

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = (d, f) => {
  if(d || f) {
    return true
  } 
}

oneTrue()

const formSingleTrue = document.getElementById("formSingleTrue") 

formSingleTrue.addEventListener("submit",e => {
  e.preventDefault()
  
  let d = document.getElementById("thingThree").value
  let f = document.getElementById("thingFour").value

  
  document.getElementById("checkSingleTrue").innerHTML = "It's " + oneTrue(d,f);
}) 

// Write a JavaScript program that runs when both things are not true.  

const notTrue = (g, h) => {
  if(!g && !h) {
    return true
  } 
}

notTrue()

const formNotTrue = document.getElementById("formBothNotTrue") 

formNotTrue.addEventListener("submit",e => {
  e.preventDefault()
  
  let g = document.getElementById("thingFive").value
  let h = document.getElementById("thingSix").value

  
  document.getElementById("checkBothNotTrue").innerHTML = "It's " + notTrue(g,h);
}) 

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
