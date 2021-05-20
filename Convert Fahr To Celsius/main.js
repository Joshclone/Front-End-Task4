alert('Hi! Do you want to convert Celsius to Fahrenheit?')

//Prompt the user to enter a celsius value
let c = prompt('Input value of Celsius');

//Convert the string value from the prompt to a number
let C = Number(c);

//Run conversions with the number value
let F = (9 / 5) * C + 32;

//Alert the result from computation
alert(`${C}\u00B0c equals ${F}\u00B0F`);
document.write(`The value of ${C}\u00B0c is ${F}\u00B0F. <br>Please refresh page to convert another value.`);
