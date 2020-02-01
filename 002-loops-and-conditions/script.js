let m  = NaN;
while (isNaN(m)) {
  m = parseInt(prompt("Enter M", ''));
}
let n  = NaN;
while (isNaN(n)) {
  n = parseInt(prompt("Enter N", ''));
}

let skipEven = confirm("Пропустити парні ?");

document.write('M : ',m+'<br \/>');
document.write('N : ',n+'<br \/>');

let sum=0;

for(let i=m; i<=n; i++){
  if (skipEven){
    if (i%2==0) {
      continue;
    }
  }
  sum+=i;
}
document.write('Sum :: ',sum);
