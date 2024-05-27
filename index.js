const doubleLetter = (str) => {
  let double = "";
  for (let i = 0; i < str.length; i = i + 1) {
    (double = `${double}${str.charAt(i).repeat(2)}`);
  }
 return double;
};
console.log(doubleLetter("hello world!")); //hheelllloo  wwoorrlldd!!
/////////////////////////////////

const padString = (str, length, symbol, position = "toRight") => {
  if (position == "toLeft") {
    return str.padStart(length, symbol);
  } else if (position == "toRight") {
    return str.padEnd(length, symbol);
  } 
};

console.log(padString("Andrii", 12, "^", "toLeft"));//^^^^^^Andrii
console.log(padString("Andrii", 12, "^")); //Andrii^^^^^^
console.log(padString("Andrii", 4, "^")); //Andrii

/////////////////////////////////////
const camelCase = (str, separator) => {
  const splitStr = str.split(separator); 
  const bigFirstLetter = (i) => {
    let element = "";
    for (let j = 1; j < splitStr.at(1).length; j++) {
      element = `${element}${splitStr.at(i).at(j)}`;
    }
    return `${splitStr.at(i).at(0).toUpperCase()}${element}`;
  };
  let elements = "";
  for (let i = 1; i < splitStr.length; i++) {
    elements = `${elements}${bigFirstLetter(i)}`;
  }
 return`${splitStr.at(0)}${elements}`
};

console.log(camelCase("apple banana orange andrii", " ")); //appleBananaOrangeAndrii
console.log(camelCase("apple", " ")); //apple

//Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок і повертає новий рядок, у якому кожен символ повторюється двічі hello ⇒ hheelllloo.
//Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число, що є довгим рядком, який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно, четвертим параметром є буремний «прапор»,
//чи додавати символи зліва або справа(за замовчуванням). Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін. Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.
//Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату camelCase.

