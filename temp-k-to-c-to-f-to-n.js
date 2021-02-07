// temperature is 293 kelvin
const K = 150;

//converting to celcius
const C = K - 273;

//converting to Fahrenheit and log as whole number
const F = Math.floor(C*(9/5)+32)
console.log(`The temperature is ${F} degrees Fahrenheit.`)

//convert to Newton and log as whole number
const N = Math.floor(C * (33/100))
console.log(`Temperature in Newton is ${N}.`)