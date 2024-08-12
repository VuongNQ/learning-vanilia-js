
//tim dung vi tri ma user mun tim

const array = [];
const arrayData = ["a", "b","a","c","a","d"];
const element = "a";
let index = arrayData.indexOf(element);
while(index !== -1) 
{
  array.push(index);
  index = arrayData.indexOf(element, index + 1)
}
console.log(index) // [0,2,4]

const array1 = [2,4,6,8];
const option1 = array1.indexOf(0)
console.log(option1)