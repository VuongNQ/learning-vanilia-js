//Regular Expressions
//Biểu thức chính quy hay RegExp là 1 ngôn ngữ lập trình
// nhỏ giúp tìm mẫu trong dữ liệu
//Vd : / cờ (g, i , m, s , u or y) /
//biểu thức chính qui có 2 tham số (1 mẫu tìm kiếm bắt buộc và 1 cờ tuỳ chọn); 
//I.Mẫu tìm kiếm(pattern)
//  - có thể là 1 văn bản hoặc bất kì dạng mẫu nào
//  - từ spam trong email có thể là mẫu mà chúng tôi muốn tìm kiếm
// trong email hoặc số định dạng.
//II.Mẫu tuỳ chon(flags)
// g: có nghĩa là tìm kiếm mẫu trong toàn bộ văn bản
// i: không phân biệt chữ hoa và chữ thường(nó tìm kiếm cả chữ hoa và chữ thường)
// m: đa dòng
let pattern = 'love';
let flags = 'gi'
let regEx = new RegExp(pattern, flags)// /love/gi
//testing for a match
//test() : kiểm tra sự trùng khớp trong 1 chuỗi. Nó trả về đúng hay sai
// search() : kiểm tra sự khớp trong 1 chuỗi.
const str = "I love Javascript";
const pattern1 = /love/g
console.log(str.search(pattern1))
//match(): trả về 1 mảng chứa tất cả kết quả(pattern, index, input and group) 
//replace(): Thực hiện tìm kiếm kết quả khớp trong 1 chuỗi 
// và thay thế chuỗi con phù hợp bằng chuỗi con thay thế
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';
const pattern2 = txt.replace(/Python/gi, 'javascript');
console.log(pattern2)