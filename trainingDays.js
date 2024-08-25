// The scope of `random` is too loose. fixed! random Added to local scope of getRandEvent function!
const name = 'Nala';

const getRandEvent = () => {
const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight fixed! changed from declaring a new value within each if/else scope adding value to the days variable
const getTrainingDays = event => {
  let days = 50;
  if (event === 'Marathon') {
    return days;
  } else if (event === 'Triathlon') {
    return days +50;
  } else if (event === 'Pentathlon') {
    return days + 100;
  }
};

// The scope of `name` is too tight fixed! Made name variable global and added it as a parameter to the function
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);

