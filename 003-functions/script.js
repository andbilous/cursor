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

document.writeln(getMaxDigit(123567));
document.writeln(getNumberPower(5,2));
document.writeln(makeFirstLetterTitle('hello'));
document.writeln(getRandomNumber(1,10));
document.writeln(removeLettersFromSentence('hello gaga aaasswaa','a'));
document.writeln(isPalindrome('madam'));
document.writeln(isPalindrome('mader'));