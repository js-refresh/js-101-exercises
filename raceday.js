//race day... Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
// Race number:
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Start time:
// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).
// But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.


let raceNumber = Math.floor(Math.random() * 1000); //provides random number 0-1000
const earlyregistrant = false; //edit if early registrant or not

const age = 18;  //edit runner's age

if (earlyregistrant === true && age >=18) { //provides race numbers based on condition
  console.log(raceNumber += 1000);
} else {
  console.log(raceNumber);
}

if (age > 18 && earlyregistrant === true) {
  console.log(`${raceNumber}: Your race time is 9:30AM.`)
} else if (age > 18 && !earlyregistrant === true) {
  console.log(`${raceNumber}: Your race time is 11:00AM.`)
} else if (age < 18 ) {
  console.log(`${raceNumber}: Your race time is 12:30AM.`)
} else if (age === 18 && earlyregistrant === true) {
  console.log(`${raceNumber}, see the front desk.`)
} else if (age === 18 && earlyregistrant === false) {
  console.log(`${raceNumber}, see the front desk.`)
}

