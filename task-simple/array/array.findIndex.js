//bai tap Array.Prototype.finIndex
const option = [2, 4, 0, 6];
const option1 = [true, false, true];
const option2 = ["number", "string", ""];
const option3 = [12, "strong", 28];
const option4 = ["number", "23", 52, "", 0, "kiki", 10];
const option5 = [undefined, false, true];
const option6 = [
  {
    a: "",
    b: 2,
    c: null,
    d: 24,
    e: "anh m",
  },
  {
    a: "",
    b: 2,
    c: null,
    d: 24,
    e: "anh m",
  },
];

const array = option.findIndex((item) => item === 0);
console.log(array); //=> vi tri dau tien 0 (2)

const array1 = option1.findIndex((item) => item);
console.log(array1); //vi tri dau tien 0 (true)

const array2 = option2.findIndex((item) => item === "");
console.log(array2); //vi tri thu 2 ("")

const array3 = option2.findIndex((item) => (item.length === 0 ? true : false));
console.log(array3); //vi tri thu 2 ("")

const array4 = option4.findIndex(
  (item) => item === "" && typeof item === "string"
);
console.log(array4); //vi tri thu 3 ("")

const array5 = option5.findIndex(
  (item) => item > 10 && typeof item === "number"
);
console.log(array5); //vi tri thu 2 (52)

const array6 = option6.findIndex(item => item.a === "4" && typeof item.a === "string");
console.log(array6); // phan tu 1 co trong mang a 
//cach 2 de kiem tra 

const array7 = option6.findIndex(item => item.hasOwnProperty("c"));
console.log(array7);
