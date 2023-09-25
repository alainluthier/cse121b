/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return number1+number2;
}
function addNumbers(){
    let addNumber1=Number(document.querySelector('#add1').value);
    let addNumber2=Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1,addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click',addNumbers);
/* Function Expression - Subtract Numbers */
const substract = function(number1,number2){
    return number1-number2;
}
const substractNumbers=function(){
    let addNumber1=Number(document.querySelector('#subtract1').value);
    let addNumber2=Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = substract(addNumber1,addNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click',substractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1,number2) => number1*number2;
const multiplyNumbers = () => document.querySelector('#product').value=multiply(Number(document.querySelector('#factor1').value),Number(document.querySelector('#factor2').value))
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide(number1,number2){
    return number1/number2;
}
function divideNumbers(){
    let dividend=Number(document.querySelector('#dividend').value);
    let divisor=Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend,divisor);
}
document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */
let currentDate = new Date()
let currentYear = currentDate.getFullYear()
document.querySelector('#year').innerHTML=currentYear
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray=[1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML=numbersArray
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML=numbersArray.filter(x=>x%2==0)
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML=numbersArray.filter(x=>x%2==1)
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML=numbersArray.reduce((s,x)=>s+x)
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML=numbersArray.map(x=>x*2)
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML=numbersArray.map(x=>x*2).reduce((s,x)=>s+x)
