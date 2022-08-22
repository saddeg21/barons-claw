//BARON'S CLAW ALGORITHM//

let characters_barons_standard = [];
const SALT = 3;
const characters_UTF_8 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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

/* THIS PART AUTOMATICALLY WORKS AND CREATE THE BARONS SCHEMA */

characters_UTF_8.forEach((element, index) => {
  //ADD THE NUMBERS OF YEAR OF SHIELDS FOUNDATION AND A SALT NUMBER TO REAL CHAR ASCII NUMBER
  let newVal = element.charCodeAt(0) + 65 + SALT + 19;
  //Swap the values of capital letters with normal letters by adding or substituting 32
  if (index <= 25) {
    newVal = newVal + 32;
  } else {
    newVal = newVal - 32;
  }
  characters_barons_standard.push(newVal);
});

/* ASCII SCHEMA */
/* This part of code is about getting a password as a input and turn it back to string form according to ASCII Schema */

function slicerFunc(inp) {
  let newArr = [];
  for (let i = 0; i < inp.length; i = i + 3) {
    newArr.push(Number(inp[i] + inp[i + 1] + inp[i + 2]));
  }
  return newArr;
}

function toFormatUtf(arr) {
  const SALT = 3;
  let newArray = [];
  arr.forEach((element) => {
    if (element >= 184) {
      element -= 32;
    } else {
      element += 32;
    }
    element = element - 19 - 65 - SALT;
    newArray.push(element);
  });
  return newArray;
}

function stringOfDecode(arr) {
  let str = "";
  arr.forEach((element) => (str += String.fromCharCode(element)));
  return str;
}

function baronsClaw(inp) {
  return stringOfDecode(toFormatUtf(slicerFunc(inp)));
}

/* BARONS SCHEMA */
/* This part of Code is about checking a characters placeholder at BARONS SCHEMA */
function toAsciiForm(inp) {
  let newArr = [];
  for (let i = 0; i < inp.length; i++) {
    newArr.push(inp[i]);
  }
  let newStr = "";
  newArr.forEach((element) => {
    let x = element.charCodeAt(0) + 65 + SALT + 19;
    let ind = characters_UTF_8.findIndex((el) => el === element);
    if (ind <= 25) {
      8;
      x = x + 32;
    } else {
      x = x - 32;
    }
    newStr = newStr + x;
  });
  return newStr;
}
