const getMaxDigit = (number) => {   // Макс число
  const sortedArray = Array.from(String(number), Number).sort();
  return sortedArray[sortedArray.length-1];
};

const getNumberPower = (number,power) => {   // Степінь
  let res=1;
  for(let i =0; i<power; i++){
    res*=number;
  }
  return res;
};

const makeFirstLetterTitle = (word) => {   // Перша буква велика
  let lowerCasedWord = word.toLowerCase();
  let res = lowerCasedWord.split('');
  res[0] = res[0].toUpperCase();
  return res.join('');
};

const getRandomNumber = (n,m) => {        // Випадкове число
  return Math.floor(Math.random() * (m - n) + n);
};

const  removeLettersFromSentence = (sentence,letter) => {  // Видалити з речення
  let pattern =  new RegExp(letter, 'g');
  return sentence.replace(pattern, '');
}

const isPalindrome = (word) => {    //  Паліндром
  if(!word){
    return false;
  }
  let singleLowerCasedWord = word.toLowerCase().split(' ').join('');
 return singleLowerCasedWord.includes(singleLowerCasedWord.split('').reverse().join(''))
}

console.log(getMaxDigit(123567));
console.log(getNumberPower(5,2));
console.log(makeFirstLetterTitle('влад'));
console.log(makeFirstLetterTitle('вЛАД'));
console.log(getRandomNumber(1,10));
console.log(removeLettersFromSentence('hello gaga aaasswaa','a'));
console.log(isPalindrome('мадам'));
console.log(isPalindrome('кокос'));
console.log(isPalindrome('Аргентина манит негра'));