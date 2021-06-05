/*
    CIT 281 Project 1
    Name: Julia Smith
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function getRandomLetters() {
  let randomLenght = getRandomInteger(5, 26);
  let output = "";

  for (let i = 0; i < randomLenght; i++) {
    let letter = letters[getRandomInteger(0, 26)];
    output += letter;
  }
  console.log(output);
}

getRandomLetters();
