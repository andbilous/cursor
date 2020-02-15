const getRandomArray = (length,min,max) => {
    let res = [];
    for(let i =0;i<length;i++){
      res.push(Math.floor(min + Math.random() * (max + 1 - min)));
    }
    return res;
};

console.log(getRandomArray(15, 1, 100));