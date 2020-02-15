const getRandomArray = (length,min,max) => {
    let res = [];
    for(let i =0;i<length;i++){
      res.push(Math.floor(min + Math.random() * (max + 1 - min)));
    }
    return res;
};

const getAverage = (...numbers) => {
return  numbers.reduce((accumulator, currentValue)=> {
   if (Number.isInteger(currentValue)){
    return accumulator + currentValue;
   }
  })/numbers.length;
};

const filterEvenNumbers = (...numbers) => {
    return numbers.filter(number => number%2 !== 0);
}

const countPositiveNumbers = (...numbers) => {
   return  numbers.filter(number => number > 0).length;
}

const getDividedByFive = (...numbers) => {
    return numbers.filter(number => number%5 === 0)
};

const replaceBadWords = (string) => {
    const words = string.split(' ');
   let res = words.map((word)=>{
     if (word.includes('fuck')){
      return word.replace('fuck', '****')
     }
    if (word.includes('bullshit')){
      return word.replace('bullshit', '********')
    }
    return word;
   })
  return res.join('  ');
  };

console.log(getRandomArray(15, 1, 100));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(replaceBadWords('Are you fucking kidding?'));
console.log(replaceBadWords('It\'s bullshit!'));