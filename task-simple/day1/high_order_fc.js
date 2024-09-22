//day 7: Higher Order Functions(Hàm Bậc Cao hơn)
// Hàm Bậc cao hơn là các hàm lấy hàm khác làm tham số hoặc trả về hàm giá trị . Hàm được truyền dưới dạng tham số được gọi là Callback
const callback = (n) => {
  return n ** 2
}
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
console.log(cube(callback, 3));
/* ---------- */
const numbers = [1, 2, 3, 4]
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
//*> Function Programming: phải sử dụng lại forEach, map, filter, reduce , find , every , some and sort đều có chức năng gọi lại
//*> forEach : element(nó có chức năng gọi lại , với các phần tử), index(Tham số chỉ mục và chính mảng), array(chỉ mục và mảng tuỳ chọn)
//*> map: Lặp lại 1 phần tử mảng và sửa đổi các phần tử mảng. Nó nhận 1 hàm gọi lại các element,index,array và trả về 1 mảng mới
//*> filter: Lọc ra các mục đáp ứng đầy đủ các điều kiện lọc và trả về 1 mảng mới
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)//['Finland', 'Ireland']

//*> reducer: Reducer có chức năng gọi lại, accument( hàm gọi lại lấy giá trị ban đầu) , current và array => trả về 1 giá trị duy nhất 
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue) 
/* ------ */
const numbers2 = [1, 2, 3, 4, 5]
const sum = numbers2.reduce((acc, cur) => acc + cur, 0)
console.log(sum)
//*> every: Kiêm tra xem tất cả các yếu tố có giống nhau ở 1 khía cạnh hay không. Nó trả về boolean
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr) // true

//*> find: Trả về phần tử đầu tiên thoả mãn điều kiện
const ages = [24, 22, 25, 32, 35, 18]
const age2 = ages.find((age) => age < 20)

console.log(age2) // 18
//*> findIndex: Trả về vị trí phần tử đầu tiên thoả mãn điều kiện 
const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages3 = [24, 22, 25, 32, 35, 18]

const age4 = ages.findIndex((age) => age < 20)
console.log(age4) // 5

//*> Some: Kiểm tra xem một số yếu tố có giống nhau ở 1 khía cạnh hay không . Nó trả về boolean
//*> Some === every
const somes = ["Asabeneh", "Mathias" , "Elias" , "Brook"];
const bools = [true , true , true , true , true];

const areSomeTrue = bools.some((b) => b === true)
console.log(areSomeTrue); // true
//*> Sort: Các phương thức sắp xếp mang theo thứ tự tăng dần hoặc giảm dần , theo mặc định Sort() sắp xếp các giá trị dưới dạng chuỗi
// Điều này hoạt động tốt cho các mục mảng chuỗi nhưng ko hoạt động tốt cho các số . Nếu các giá trị số được sắp xếp dưới dạng chuỗi 
// và cho kết quả sai . Method Sort() sửa đổi mảng ban đầu . Bạn nên sao chép dữ liệu gốc trước khi bắt đầu sử dụng phương pháp sắp xếp

//Sắp xếp các giá trị chuỗi
//Sắp xếp số sẽ bị sai

//LEVEL 1 
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const city = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// sự khác biệt của : forEach(), map() , filter() and reduce()
// Điểm giống nhau là lặp qua trong từng mảng.
// Điểm khác nhau là : map, filter => điều có 1 mảng mới và forEach vs reduce trả về giá trị duy nhất.



 
