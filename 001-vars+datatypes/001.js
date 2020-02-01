let car = 15.678;
let bike = 123.965;
let plain = 90.2345;
let resultString= `Макс ціна: ${Math.max(car,plain,bike)}
Мін ціна:${Math.min(car,plain,bike)} 
Сума : ${plain+car+bike}
Сума округлена : ${Math.floor(plain)+Math.floor(car)+Math.floor(bike)}
Сума округлена до сотень : ${Math.ceil(plain+car+bike)/100*100}
Чи є сума парним : ${Math.floor(plain+car+bike)%2 == 0}
Здача : ${Math.abs((plain+car+bike)-500)}
Середнє округлене : ${((plain+car+bike)/3).toFixed(2)}
`;
console.log(resultString);