let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const runnerAge = 28;

if (runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly){
  console.log(`You will race at 9:30am and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly){
  console.log(`You will race at 11:00am and your race number is ${raceNumber}`);
} else if (runnerAge < 18){
  console.log(`You will race at 12:30pm and your race number is ${raceNumber}`);
} else {
  console.log('Kindly see the registration desk.');
}
