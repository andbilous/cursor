const getMaxDigit = (number) => {
  const sortedArray = Array.from(String(number), Number).sort();
  return sortedArray[sortedArray.length-1];
};

const getNumberPower = (number,power) => {
  let res=1;
  for(let i =0; i<power; i++){
    res*=number;
  }
  return res;
};

const makeFirstLetterTitle = (word) => {
  let res = word.split('')
  res[0] = res[0].toUpperCase();
  return res.join('');
};

const getRandomNumber = (n,m) => {
  return Math.floor(Math.random() * (m - n) + n);
};

const  removeLettersFromSentence = (sentence,letter) => {
  let pattern =  new RegExp(letter, 'g');
  return sentence.replace(pattern, '');
}

const isPalindrome = (word) => {
  if(!word){
    return false;
  }
 return word.includes(word.split('').reverse().join(''))
}

console.log(getMaxDigit(123567));
console.log(getNumberPower(5,2));
console.log(makeFirstLetterTitle('hello'));
console.log(getRandomNumber(1,10));
console.log(removeLettersFromSentence('hello gaga aaasswaa','a'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('mader'));