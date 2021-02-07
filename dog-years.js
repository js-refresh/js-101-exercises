//Dog Years converter
const myAge = 30;

//the first 2 years of dog life is like 10.5 years each
let earlyYears = 2; 
earlyYears *= 10.5

//later years are 4 dog years to 1 year
let laterYears = myAge - 2 //removes 2 years already accounted for above
laterYears *= 4

let myAgeInDogYears = earlyYears + laterYears

let myName = 'Jarshua'.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years. `)