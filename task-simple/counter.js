export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
const data = [
  {
    country: "France",
    content:
      "pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    name: "Connor R. Lynch",
    region: "Haute-Normandie",
    postalZip: "7157",
  },
  {
    country: "Russian Federation",
    content:
      "Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra",
    name: "Noah W. Barnes",
    region: "Irkutsk Oblast",
    postalZip: "25435",
  },
  {
    country: "Russian Federation",
    content:
      "dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi",
    name: "Nichole U. Hobbs",
    region: "Nizhny Novgorod Oblast",
    postalZip: "27-317",
  },
  {
    country: "France",
    content:
      "nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec",
    name: "Janna D. Mccoy",
    region: "Champagne-Ardenne",
    postalZip: "1204",
  },
  {
    country: "Sweden",
    content:
      "nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare",
    name: "Lisandra J. Barton",
    region: "Jönköpings län",
    postalZip: "24-871",
  },
];
const groupCountry = (array) => {
  const groupObject = array.reduce((accument, accumentValue) => {
    if (typeof accumentValue.country === "string") {
      /* dieu kien value phai la string */
      const key = accumentValue.country.toLowerCase().replace(/\s+/g, "_");
      if (!accument[key]) {
        /* dieu kien phai bang array */
        accument[key] = [];
      }
      /* mang phai day vao spread operator them moi nhung ma khong lam thay doi goc */
      accument[key].push({ ...accumentValue, country: undefined });
    }
    return accument;
  }, {});
  return groupObject;
};
const result = groupCountry(data);
console.log(result);

//Bai tap Level 1 array
const empty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//1.Get the first item, the middle item and the last item of the array
console.log(empty[0]);
console.log(empty[Math.floor(empty.length / 2)]);
console.log(empty.length - 1);
// ==>
//2.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Iracle",
  "Amazon",
];
//3.Print the number of companies in the array
console.log(itCompanies.length);
//4.Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);
//5.Print out each company
itCompanies.forEach((element) => {
  console.log(element);
});
//6.Change each company name to uppercase one by one and print them out
itCompanies.forEach((element) => {
  console.log(element.toLocaleUpperCase());
});
//7.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(", ")} la cong ty lon`);
//8.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyToCheck = "Google";
if (itCompanies.includes(companyToCheck)) {
  console.log(`${companyToCheck} exists in the itCompanies array.`);
} else {
  console.log(`${companyToCheck} is not found in the itCompanies array.`);
}

//9.Sort the array using sort() method
/* console.log(itCompanies.sort()) //thứ tự từ A-Z
//10.reverse the array using reverse()

console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(-3)) */

//11.Remove the first IT company from the array
/* console.log(itCompanies.slice())
if(itCompanies.includes('Facebook')) {
  console.log(itCompanies.shift())
}
//12.Remove the middle IT company or companies from the array
const middleIndex = itCompanies[Math.floor(itCompanies.length / 2)]
if(itCompanies.length % 2 === 0 ) {
  console.log(
    itCompanies.splice(middleIndex - 1, 2)
  )
} else {
  itCompanies.splice(middleIndex, 1)
}
//13.Xoa phần tử cuối mảng
console.log(itCompanies.splice(-1)) */

//level 2
//1.First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// Remove punctuations
text = text.replace(/[.,]/g, "");
// Convert to array
const words = text.split(" ");
console.log(words);
//2.in the following shopping card shopping card add , remove edit items
//*> add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
/* if(shoppingCart.includes('Milk')) {
  const fistShopping = "Meat";
    shoppingCart.unshift(fistShopping)
}
//*> add Sugar at the end of you shopping cart uf it has not been already added
if(shoppingCart.includes('Milk')) {
  let lastShopping = 'Sugar';
   shoppingCart.push(lastShopping)
} */

if (shoppingCart.includes("Honey")) {
  shoppingCart.pop("Honey");
}

if (shoppingCart.includes("Tea")) {
  let newEdit = shoppingCart;
  newEdit[2] = "Green Tea";
}
console.log(shoppingCart);
//*> In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let newArray = "Ethiopia";
if (shoppingCart.includes(newArray)) {
  console.log(newArray.toLocaleUpperCase());
} else {
  console.log([...shoppingCart, newArray]);
}

const webTechs = "Sass";
const index = shoppingCart.indexOf(webTechs);
if (index === 1) {
  console.log("Sass is a CSS preprocess");
} else {
  shoppingCart.push(webTechs);
}
console.log(shoppingCart);
//*>Concatenate the following two variables and store it in a fullStack variable.
const fontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const newFontBack = fontEnd.concat(backEnd);
console.log(newFontBack);

//level 3
//*> The following is an array 10 students ages:
const age = [19, 22, 19, 24, 20, 25, 24, 25, 24];
console.log(age.sort()); // [19 , 19 , 20 , 22 , 24 ,24 ,24 , 25 , 25 ]
console.log(age[0]); //19
console.log(age[age.length - 1]); //25
console.log(age[Math.floor(age.length / 2)]); // 24

const middleIndex2 = Math.floor(age.length / 2);
const medianAge =
  age.length % 2 === 0
    ? age[middleIndex2 - 1] + age[middleIndex2]
    : age[middleIndex2];
console.log(medianAge);

const aveGase = age.reduce((sum, age) => sum + age, 0) / age.length;
console.log(aveGase);

//day 4 loop
//for...loop , while

//day 5 function
//Hàm là 1 khối mã hoặc câu lệnh lập trình có thể tái sử dụng được thiết kế để thực hiện 1 tác vụ nhất định
//Declaration function
//Expression function
//Anonymous function
//Arrow function

// day 6 global vs local

/* 
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
  "Kenya",n
];
const webTechs5 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; */

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
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
//Level 3:
class Person {
  constructor(firstName, lastName, age , country, city) {
    this.firstName = firstName
    this.lastName  = lastName 
    this.age = age 
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName
    return fullName
  }
  get getFirstName() {
     return this.firstName
  }
  get getLastName() {
    return this.lastName
  }
}
const person1 = new Person("anh" , "quốc" , 19 , "number" , "alo");
console.log(person1.country)
console.log(person1.getFirstName)
console.log(person1.lastName)