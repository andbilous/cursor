const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes (salary) {
  return this.tax * salary;
}

function getMiddleTaxes () {
    return this.tax * this.middleSalary;
}

function getTotalTaxes () {
  return this.tax * this.middleSalary * this.vacancies;
}

export function getMySalary (){
  setTimeout(setInterval(()=>{
    this.salary = Math.floor(Math.random() * (2000 - 1500) + 1500)
    this.taxes= this.tax * this.salary
    console.log({
       salary: this.salary ,
       taxes: parseFloat(this.taxes.toFixed(2)) ,
       profit:this.salary - this.taxes.toFixed(2) 
    });
  },10000).bind(this),0)
}



console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));

console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(litva));

console.log(getMyTaxes.call(ukraine,2000));

getMySalary.call(latvia);
