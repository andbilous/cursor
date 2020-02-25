class Student {
  constructor (university,course,fullname) {
      this.university=university;
      this.course=course;
      this.fullname=fullname;
      this.marks = [5,5,5,5,5];
      this.disabled = false;
  }
  getInfo = () =>`Студент ${this.course}-го курса ${this.university}, ${this.fullname}`;



  get studentsMarks() {
    if(this.disabled){
      return null;
    }
    return this.marks;
  }

  set addMark(mark) {
    if(this.disabled){
      return ;
    }
    this.marks.push(mark);
  }

  getAverageMark(){
    if(this.disabled){
      return null;
    }
    return this.marks.reduce((a,b) => a + b, 0) / this.marks.length
  }

  dismiss(){
    this.disabled=true;
  }

  recover(){
    this.disabled=false;
  }
}

const student = new Student('Univer','2','Andrew Kiev');
console.log(student.getInfo());
student.dismiss();
console.log(student.studentsMarks)
student.recover();
console.log(student.studentsMarks)

class BudgetStudent extends Student {
  constructor(university,course,fullname){

    super(university,course,fullname);

     this.getScholarship = () =>{
       if(super.disabled || super.getAverageMark()<4){
          return;
       }
       setTimeout(() => console.log('Вы получили 1400 грн. стипендии'),30000);
     }
     this.getScholarship();
    }
}

const budgetStudent = new BudgetStudent('Univer','2','Andrew Kiev');
console.log(new BudgetStudent.dismiss());