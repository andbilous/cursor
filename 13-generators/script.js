function* createIdGenerator() {
  let i = 0;
  while(true)
      yield i++;
}
let idGenerator = createIdGenerator();
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

function* newFontGenerator(i) {
  while (true) {
    let currentValue = yield i;
    if (currentValue === "up") {
        i += 1;
    } else
     if (currentValue === "down") {
        i -= 1;
    }   
}

}

const fontGenerator = newFontGenerator(14)
console.log(fontGenerator.next("up").value) // 14
console.log(fontGenerator.next("up").value)  
console.log(fontGenerator.next("up").value) 
console.log(fontGenerator.next().value) 
console.log(fontGenerator.next("down").value) 
console.log(fontGenerator.next("down").value) 
console.log(fontGenerator.next("down").value) 
console.log(fontGenerator.next().value) 