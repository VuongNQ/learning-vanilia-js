//Desturing and Spread
// Phá huỷ là 1 cách giải nén các mảng , các đối tượng
// và gán cho nó 1 biến riêng biệt

//Desturing Arrays
//1
const numbers = [1, 2, 3];
const [numberOne, numberTwo, numberThree] = numbers;
console.log(numberOne, numberThree, numberTwo);
//2
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, back] = fullStack;
console.log(frontEnd);
console.log(back);
//3
const numbers1 = [1, 2, 3];
let [numOne, , numThree] = numbers1; //2 is omitted

console.log(numOne, numThree); //1 3
//4
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3); //  1 2 3
console.log(rest); // 4 5 6 7 8 9 10

//desturing object
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area } = rectangle;
console.log(width, height, area);
//object parameter with desturing
//(tham số đối tượng có tính phá huỷ)
const react = {
  width: 20,
  height: 30,
};
const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};
console.log(calculatePerimeter(react)); // 60
//Desturing object during iteration
// Phá huỷ đối tượng trong quá trình lặp
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    compelete: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];
for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}
//II.Spread or Rest Operator
//sử dụng toán tử trải rộng (...) để lấy các phần tử
// còn lại dưới dạng mảng . Ngoài ra , chúng tôi
// sử dụng toán tử trải rộng để trải rộng các phần
// tử mảng sang mảng khác
//1.Spread Array
const countries = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCountries] = countries;
console.log(gem); //Germany
console.log(fra); //France
console.log(nordicCountries); //Belgium , finLand , Sweden,'Norway','Denmark','Iceland'
// Coppy mảng
const frontEnd2 = ["HTML", "CSS", "JS", "React"];
const backEnd1 = ["Node", "Express", "MongoDB"];
const result1 = [...frontEnd2, ...backEnd1];
console.log(result1);
//2.Spread Object
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};
const copiedUser = { ...user, name: "Ngovanquooc" };
console.log(copiedUser);
//{name: "Ngovanquooc", title: "Programmer", country: "Finland", city: "Helsinki"}

//2.
const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};
console.log(sumAllNums(1, 2, 3, 4, 5)); //15
//Level 1 : bài tập 1
//1.Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
//2.Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries1 = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const [fin, est, sw, den, nor] = countries1;
console.log(fin, est, sw, den, nor);
//3.Destructure the rectangle object by its properties or keys.
const rectangle1 = {
  width1: 20,
  height1: 10,
  area1: 200,
  perimeter1: 60,
};
const { width1, height1, area1, perimeter1 } = rectangle1;
console.log(width1, height1, area1, perimeter1);

//Level 2:
//1.Iterate through the users array and get all the keys of the object using destructuring
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

//2.Find the persons who have less than two skills
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
const result2 = users.filter((item) => item.skills.length < 2);
console.log(result2);
//Level 3:
const student = ["David", ['HTML', 'CSS' , 'JS' , 'React'], [98, 85, 90, 95]];
const [name ,skills,[...scores]] = student;
const jsScore = scores[2]; 
const reactScore = scores[scores.length - 1]
console.log(name,skills, jsScore, reactScore);
//result : David (4) ["HTML" , 'CSS', 'JS', 'React'] 90 95

//2.Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(students) {
  const [name, skills] = students;
  return {
    name, skills
  }
}
const convertStudents = convertArrayToObject(students);

//3.Copy the student object to newStudent without mutating the original object. In the new object add the following ?
//Add Bootstrap with level 8 to the front end skill sets
//Add Express with level 9 to the back end skill sets
//Add SQL with level 8 to the data base skill sets
//Add SQL without level to the data science skill sets
const student1 = {
  name: 'David',
  age2: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}
const {name1, age, skills1} = student1
console.log(name1, age, skills1);
const addBootStrap = skills.frontEnd.push({skill : "Bootstrap" , level : 8});
const addBackend = skills.backEnd.push({skill: "Express", level: 9});
const adDataBase = skills.dataBase.push({skill: "SQL", level: 8});
const addDataScience = skills.dataScience.push('SQL')