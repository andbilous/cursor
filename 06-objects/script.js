const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

const getSubjects = (student) => {
    return  Object.keys(student.subjects).map((subject)=>{
      return subject.charAt(0).toUpperCase() + subject.slice(1)
    });
};


const getAverageMark = (student) => {
  let allMarks = Object.values(student.subjects).flat();
  return (allMarks.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
  })/allMarks.length).toFixed(2);
};

const getStudentInfo = (student) => {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  }
};

const getStudentsNames = (students) => {
  let names=[];
    students.forEach((student=>{
      names.push(student.name);
    }))
    return names.sort();
};


const getBestStudent = (students) => {
  let bestStudent = '';
  let bestMark = 0;
  students.forEach(student => {
   let averageMark= getAverageMark(student)
      if(averageMark >= bestMark){
        bestMark=averageMark;
        bestStudent=student.name;
      }
  })
  return bestStudent;

};


export const calculateWordLetters = (word) => {
  let result={};
    let wordInArray = word.split('');
    wordInArray.forEach(letter=>{
      result[letter]=0;
    });

   wordInArray.forEach(letter =>{
      result[letter]++;
   });
   
   return result;
};



console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters('тест'));