//For loop
// For loop structure

for (let i = 0; i <= 5; i++) {
  console.log(i);
} // 0 1 2 3 4 5

//While loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
} // 0 1 2 3 4 5

// do while loop
let i1 = 0;
do {
  console.log(i1);
  i++;
} while (i1 <= 5);

//for of Loop: Chúng ta sử dụng vòng lặp for cho mảng. Đây là 1 cách rất thủ công để lặp qua 1 mảng nếu chúng ta không quan tâm đến chỉ mục
// của từng phần trong mảng
//for (const tech of webTechs)
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
} // HTML , CSS, JAVASCRIPT, REACT , REDUX , NODE , MONGODB
for (const tech of webTechs) {
  console.log(tech[0]); // get only the first letter of each element,  H C J R N M
}

//break: là dừng lại điều kiện đó

//bài tập : level 1
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const webTechs1 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const mernStack = ["MongoDB", "Express", "React", "Node"];

//bài 1 : từ 0 đến 10
let a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}
for (let i = 0; i >= 10; i++) {
  console.log(i);
}
let b = 0;
do {
  console.log(b);
  b++;
} while (b >= 10);

// bài 2 : từ 10 đến 0
let c = 10;
while (c >= 0) {
  console.log(c);
  c--;
}
let e = 10;
do {
  console.log(e);
  e--;
} while (e >= 0);

for (let f = 10; f >= 0; f--) {
  console.log(f);
}

//bài 3: lặp lại
for (let i = 0; i <= 7; i++) {
  console.log("*".repeat(i));
}
//*
//**
//***
//****
//*****
//******
//bài 4; công thức tính lớp 3
for (let i = 0; i <= 10; i++) {
  const group = i * i;
  console.log(`${i} x ${i} = ${group}`);
}

//Bài 5: chạy vòng lặp nhà nhân cho 2 3
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i * i} ${i * i * i}`);
}

//bài 6: chạy vong lặp từ 0 đến 100 và in con số chẵn
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//bài 7: Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//The sum of all numbers from 0 to 100 is 5050.
let num = 0;
for (let i = 0; i <= 100; i++) {
  num += i;
}
console.log(num);
//bài 8: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let numEvens = 0;
let numOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    numEvens += i;
  }
  if (i % 2 !== 0) {
    numOdds += i;
  }
}
console.log(`The sum of all evens 
from 0 to 100 is ${numEvens}. And the sum
of all odds from 0 to 100 is ${numOdds}
`);

//bài 9:Develop a small script which generate array of 5 random numbers
//Math.floor(Math.random() * 100 or 10 )
function netWork(count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}
const result1 = netWork(5);
console.log(result1);
//bài 10:Develop a small script which generate array of 5 random numbers and the numbers must be unique
function netWork(count) {
  const arr = [];
  while (arr.length < count) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
  return arr;
}
const result2 = netWork(5);
console.log(result2);
//bài 11: Develop a small script which generate a six characters random id:
function netWork(count) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    id = id + characters.charAt(randomNumber);
  }
  return id;
}
const result3 = netWork(6);
console.log(result3);
//bài 12: Write a script which generates a random hexadecimal number.
function netWork(length) {
  const characters = "###0123456789abcdef";
  let hexNumber = "";
  for(let i = 0; i < length; i++ ) {
    const randomLength = Math.floor(Math.random() * characters.length)
    hexNumber += characters.charAt(randomLength)
  }
  return hexNumber;
}
const result4 = netWork(7);
console.log(result4);

//bài 13: Using the above countries array , create the following new array
/* const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
]; */
let netWork = []
const newArr = countries.filter(item => typeof item === "string" ? netWork.push(item.toLocaleUpperCase()) :"s")
console(netWork)
//bài 14: Using 
const countries2 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const arr = []
const newArr2 = countries.forEach(item => typeof item === "string" ? console.log(arr.push(item.length)) : "no")
console.log(arr)
//bài 15: In above countries array,
// check if there is a country or countries containing 
// the word 'land'. If there are countries containing 'land', print it as array.
// If there is no country containing the word 'land', print 'All these countries are without land'.
const countries4 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

const checkArray = countries4.filter(element => element.includes('land'));
if(checkArray.length > 0) {
  console.log(checkArray)
}
//bai 16: In above countries array, check if there is a country 
// or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing
// the word 'ai', print 'These are countries ends without ia'.
const countries5 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

const checkArray2 = countries5.filter(element => element.includes('ia'));
if(checkArray2.length > 0) {
   console.log(`There is no country contraining the wordl ai + ${checkArray2}`)
} else {
  console.log('these are countries ends without')
}

//bài 17: using the above countries5 , 
// find the country contraining the biggest number
// of characters
const countries6 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

const findLength = countries6.reduce((longest,current) => {
  return current.length > longest.length ? current : longest
})
console.log(findLength)
//bài 18: Using the above countries array, find the country containing only 5 characters.
const countries7 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];
const checkArr = countries7.filter(element => element.length === 5);
console.log(checkArr) // ['Japan', 'Kenya']

//bài 19: find the longest word in the webTechs array
const webTechs2 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const findLength2 = webTechs.map(element => {
  console.log(element)
})

//bai 20: Find the longest word in the webTechs array
const webTechs3 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const findLength3 = webTechs3.reduce((longest, current) => current.length > longest.length ? current : longest)
console.log(findLength3)
//bai 21: Use the webTechs array to create the following array of arrays:
const webTechs5 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

   
function webTech5(arr) {
   const checkArr = arr.map(element => {
     let length = element.length;
     return [element,length]
    })
    return checkArr
}
const result5 = webTech5(webTechs5);
console.log(result4)
//bài 22: An application created using MongoDB, Express, React and Node is called a MERN stack 
// app. Create the acronym MERN by using the
// array mernStack 
const mernStack1 = ["MongoDB", 'Express' , 'React', 'Node'];
const result6 = mernStack1.map(index => index[0]).join('');
console.log(result6)

//bai 23: Iterate through the array,
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a 
//for loop or for of loop and print out the items.
const arrayThought = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(const arr of arrayThought) {
  console.log(arr)
} 

//bai 24: This is a fruit array , 
//['banana', 'orange', 'mango', 'lemon']
// reverse the order using loop without using a
// reverse method.
const fruit = ['banana', 'orange', 'mango', 'lemon']
const arr1 = []
for(let i = fruit.length - 1; i >= 0; i--) {
  
  arr1.push(fruit[i])
}
console.log(arr1)
//bai 25: Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
fullStack.forEach(subArray => {
  subArray.forEach(element => {
    console.log(element)
  })
})
//HTML
//CSS
//JS
//React
//Node
//Express
//MongoDB

//level 3 : 
// bài 1 : Arrays are mutable. Create a copy of 
// array which does not modify the original.
// Sort the copied array and store in a variable sortedCountries
const countries9 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];
const coppyCoutries = [...countries9];
const sortedCountries = coppyCoutries.sort();
console.log(sortedCountries)
//bài 2 : 

