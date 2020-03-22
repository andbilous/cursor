const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

export const splitIntoPairs = (students) => {
  let res = [];
  res.push([students[0],students[2]]);
  res.push([students[1],students[3]]);
  res.push([students[4],students[5]]);
  return res;
};

const addSubjectToStudentsPair = (pairs) => {
  return pairs.map((pair,index)=> {
    let transformedPair=[];
    let pairName = pair.join(' и ');
    transformedPair.push(pairName);
    transformedPair.push(themes[index]);
    return transformedPair;
  });
};

const addMarks = (students,marks) =>{
  let res = [];
 students.forEach( (student,index)=> {
    let studentWithMark = [];
    studentWithMark.push(student);
    studentWithMark.push(marks[index]);
    res.push(studentWithMark);
  });
  return res;
};

let pairs = splitIntoPairs(students);

let pairsWithSubjects = addSubjectToStudentsPair(pairs);


const setMarksToPairs = () => {
   return pairsWithSubjects.map((pair)=> {
      pair.push(marks[Math.floor(Math.random() * 5) + 1]);
      return pair;
    });
};



console.log(splitIntoPairs(students));
console.log(addSubjectToStudentsPair(pairs));
console.log(addMarks(students,marks));
console.log(setMarksToPairs());
