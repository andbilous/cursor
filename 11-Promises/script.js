function getDate() {
  return new Promise(resolve => {
    setTimeout(function(){
      resolve(String.fromCharCode(Date.now().toString()));
    },50);    
  });
}

async function getRandomChinese(length) {
  let word ='';
  for (let i =0; i < length; i++) {
   word+= await getDate(i);
    }
    return word
}

(async () => {
  console.log(await getRandomChinese(5))
})()
