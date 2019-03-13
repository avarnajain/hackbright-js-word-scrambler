const greeting = 'Welcome to our game!';
const stringSplit = greeting.split('');
stringSplit.join('');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const arrayItem = stringSplit[getRandomInt(stringSplit.length + 1)];


const randomInt = getRandomInt(stringSplit.length + 1);
const randomItem = stringSplit[randomInt];

[stringSplit[0], stringSplit[1]] = [stringSplit[1], stringSplit[0]];

const candy = new Map();

candy['purple'] = 'grape';
candy['red'] = 'cherry';
candy['blue'] = 'blueberry';
candy['green'] = 'lime';
candy['orange'] = 'orange';

for (let [key, value] of Object.entries(candy)) {
  console.log(`The ${value} flavor is colored ${key}.`);
}

function getFlavor(color, candyMap) {
  if (candyMap[color]) {
    return candyMap[color];
  }
  console.log(`Sorry, that color doesn't have a flavor`);
}

function getFlavors(colorArray, candyMap) {
  const flavorArray = [];
  for (let color of colorArray) {
    if (candyMap[color]) {
      flavorArray.push(candyMap[color]);
    } else {
      flavorArray.push(null);
    }
  }
  return flavorArray;
}
