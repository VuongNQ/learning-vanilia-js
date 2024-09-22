//data-types day1
// gồm có 2 data types :
// - Primitive Data Types(kiểu dữ liệu nguyên thuỷ)
//  +>  number, string , undefined , symbol , boolean , null
// - Non-primitive data types (kiểu dữ liệu không nguyên thuỷ)
//  +> object , array

/* note đặc điểm 2 primitive này sau */
// kiểu dữ liệu nguyên thuỷ không thay đổi được số liệu và chúng có thể bằng nhau về value
// kiểu dữ liệu không nguyên thuỷ có thể thay đổi hoặc thêm vào được và cho dù giá trị chúng có trùng nhau nhưng sẽ k thể bằng nhau

//*Number(khai báo dữ liệu số , đối tượng toán học(Math.PI, Math.round))
//*String("" hoặc `` , hoặc first + last , hoặc \n,\t,\\) 4 kiểu
//*String Method (toUpperCase(), toLowerCase(), )
// => length , length - 1
// => substr(start, end) cắt chuỗi
// => substring(start,end) lấy nó ra
// => split(' ') tách một chuỗi tại 1 vị trí được chỉ định
// => trim() loại bỏ khoảng trắng ở đầu hoặc cuối chuỗi
// => includes() nhận vào 1 đối số trong chuỗi kiểm tra thử có trong chuỗi thì return về true
// => replace(vị trí thay, vị trí sẽ thay) thay chuỗi
// => charAt(0)  lấy chỉ mục và trả về giá trị tại chỉ mục đó
// => concat(substring, substring, substring) nối chuỗi
// * checking Data types and Casting : tyeof kiểm tra giá trị đó là loại data type gì
// * String to Int : parseInt(), Number , plus sign(+) chuyển đổi chuỗi thành number
// * string to float
// float to Int : let num =  9.81 => parseInt(num) => 9

//Exercises: bài tập tự làm

//Boolean Operators day2
//*boolean : value two => true or false
//Pre-increment : let count = 0 ; console.log(++count) => 1
//Pre-increment : let count = 0 ; console.log(count) => 1
//Post-increment : let count = 0 ; console.log(count++) => 0
//Post-increment : let count = 0 ; console.log(count) => 1
// const now = new Date()
// console.log(now.getDay()) => ngày
// const now = new Date()
// console.log(now.getHours()) => giờ
// const now = new Date()
// console.log(now.getMinutes()) => phút

//* Conditionals day 3
// câu lệnh có điều kiện được sử dụng để đưa ra quyết định dựa trên các điều kiện khác nhau
// theo mặc định , các câu lệnh trong tập lệnh js được thực thi tuần tự từ trên xuống . Nếu logic xử lý yêu cầu như vậy thì luồng thực
// => thi tuần tự có thể được thay đổi theo 2 cách
// + Conditional Execution(thực hiện có điều kiện)
// + Repetitive Execution (thực hiện lặp đi lặp lại)
// if else , switch

//bai 1
let age =
prompt("Enter your age:")
if(age >= 18) {
  alert("You are old enough to drive.")
} else if(age < 18){
  alert("You are left with 3 years to drive.")
} else {
  alert("Error")
} 

//* bai 2
let myAge = prompt("Hãy nhập tuổi của bạn: ");

if (myAge >= 25) {
  const oldLetter = myAge - 25
  alert(`bạn lớn hơn tôi ${oldLetter} tuổi`)
} else {
  const yearsTowait  =  25 - myAge
  alert(`you old need to wait ${yearsTowait}`)
}

//bai 3 
let a = 4;
let b = 3;

if(a > b) {
  alert(`${a} is greater than ${b}`)
}
//bai 4
let numbers = prompt("Enter a number")

if(numbers % 2 === 0) {
  alert(`${numbers} is an even number`)
} else {
  const leNum = numbers % 3
  alert(`${leNum} la so lẻ `)
}


//Array day4
// medthod : indexOf() tìm vị trí index chỉ mục phần tử trong mảng
// medthod : lastIndexOf() tìm vị trí index chỉ mục phần tử cuối trong mảng
// method : concat() nối 2 mảng thành 1 mảng
// method : spred Operator ...array sẽ lấy phần tử góc 
// method : check phần tử đó ở trong có hay không 
// +: const fruit = ['banana', 'orange', 'mango', 'lemon']
// +: let index = fruit.indexOf('banana');
// +: if(index === -1) {  ra kq } else { không ra kq }
// method : isArray() check phần tử đó ở trong có hay không 
// method : toString() chuyển đổi mảng thành chuỗi 
// method : join() chuyển đổi mảng thành chuỗi 
// method : push() đẩy vào cuối mảng
// method : pop() loại bỏ cuối mảng 
// method : shift() đẩy vào đầu mảng 
// method : unshift() thêm vào đầu mảng
// method : reverse() Đảo ngược từ mảng cuối lên mảng đầu 
// method : sort() Sắp xếp theo thứ tự 
// method : slice(start, vị trí cần lấy) lấy vị trí mảng ra
// method : splice(start , delete , vị trí thêm) xoá và thêm vị trí 
// method : includes() phan tu do co hay khong 

