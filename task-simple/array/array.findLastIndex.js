//khi callbackfn dieu kien dung se truy xuat ra tat bao nhieu phan tu trong mang

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

const array = option.findLastIndex(item => item > 2);
console.log(array); //vi tri 3 lay tu phai qua trai
const array1 = option1.findLastIndex(item => item);
console.log(array1); // vi tri true lay tu phai qua trai
const array2 = option2.findLastIndex(item => item > "" );
console.log(array2); // vi tri "bump" lon hon ""
const array3 = option3.findLastIndex(item => item < 27 && typeof item === "number");
console.log(array3); // vi tri 2 (12)
const array4 = option4.findLastIndex(item => item > "" && typeof item === "string")
console.log(array4); //vi tri 5 ("kiki")
const array5 = option5.findLastIndex(item => item);
console.log(array5); //vi tri true
const array6 = option6.findLastIndex(item => item.e === "anh m" && typeof item === "string");
console.log(array6)// vi tri 1


