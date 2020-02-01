let car = 15.678;
let bike = 123.965;
let plain = 90.2345;
let randomDiscount = Math.floor(Math.random() * 20) + 1;
let plainSum = plain+car+bike;

let resultString= `Макс ціна: ${Math.max(car,plain,bike)}
Мін ціна: ${Math.min(car,plain,bike)} 
Сума : ${plainSum}
Сума округлена : ${Math.floor(plain)+Math.floor(car)+Math.floor(bike)}
Сума округлена до сотень : ${Math.ceil((Math.ceil(plainSum))/100)*100}
Чи є сума парним : ${Math.floor(plainSum)%2 == 0}
Здача : ${Math.abs((plainSum)-500)}
Середнє округлене : ${((plainSum)/3).toFixed(2)}
Cумма до оплати з випадковою знижкою : ${(plainSum-((plainSum/100)*randomDiscount)).toFixed(2)}
Упущена вигода : ${((plainSum/2)-(plainSum/100)*randomDiscount).toFixed(2)}
`;
console.log(resultString);