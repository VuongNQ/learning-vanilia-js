// Set là 1 tập hợp các phần tử . Bộ chỉ có thể chứa các phần duy nhất. Chúng ta hãy xem cách tạo 1 bộ trong
// phần bên dưới.
/* Creating an empty set */
const companies = new Set();
console.log(companies);
//Set(0) {}; 

//**cách làm 1 : 
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const setOfLanguages = new Set();
console.log(setOfLanguages);
//Set(4) {"English", "Finnish", "French", "Spanish"}

//** cách làm 2: 
const languages1 = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const setOfLanguages1 = new Set();
for(const language of setOfLanguages1) {
  console.log(language);
}
//result :
// English
// Finish
// French
// Spanish

//I.Add an element to a set
const companies2 = new Set();
console.log(companies2.size) // 0
companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 
console.log(companies) // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"};
//**Add :
const array = ["Google", "Facebook" , "Microsoft" , "Apple" , "Google" , "Amazon"];
const newSet = new Set();
for(const newArr of array) {
  newSet.add(newArr)
  console.log(newArr);//
}
console.log(newSet);// 5
//**Delete: 
console.log(newSet.delete("Facebook"));// 4
//***Has: Phương thức has có thể giúp biết liệu 1 phần tử
// nhất định có tồn tại trong 1 tập hợp hay không
console.log(newSet.has("Apple")) //true
console.log(newSet.has("Number"))//false
// clearing the set: Nó loại bỏ tất cả các phần tử khỏi 1 tập hợp
companies.clear();
console.log(companies);
// bài tập để sử dụng set : 
const languagesNew = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
]
const langSet = new Set(languagesNew);
console.log(langSet.size)

//bài tập phân loại: 
const languagesNew1 = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'Spanish'
]
const langSet1 = new Set(languagesNew1);
console.log(langSet1.size)
const counts = [];
const count = {};

for(const l of langSet1) {
  const filter = languagesNew1.filter((lng) => lng === l)
  console.log(filter)
  counts.push({lang : l, count : filter.length})
}
console.log(counts);

//Intersection of sets (giao điểm tập hợp)
// tìm giao điểm thì dùng filter
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)
let c = a.filter((num) => B.has(num))
let C = new Set(c);
console.log(C);
//Set(3) {3,4,5}
// Tìm sự khác nhau giữa 2 bộ có thể đạt được
// bằng cách sử dụng bộ lọc. Hãy tìm sự khác nhau
// của tập hợp A và tập hợp B
let a1 = [1, 2, 3, 4, 5]
let b1 = [3, 4, 5, 6]

let A1 = new Set(a1)
let B1 = new Set(b1)
let c1 = a1.filter((num) => !B1.has(num))
const C1 = new Set(c1);
console.log(C1)