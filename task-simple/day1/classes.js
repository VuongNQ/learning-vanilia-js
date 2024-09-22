//Javascript là 1 ngôn ngữ lập trình hướng đối tượng
// mọi thứ trong js đều là 1 đối tượng , với các
// thuộc tính và phương thức của nó . chúng ta tạo lớp để tạo 1 đối tượng
class Person {
  constructor(firstName , lastName) {
  //constructor: là 1 hàm dựng sẵn cho phép tạo bản
  // thiêt kế chi tiết đối tượng của chúng ta
    console.log(this)
  }
}
//Class Methods: Hàm tạo bên trong 1 lớp là 1 hàm dựng sẵn
// cho phép chúng ta tạo bản thiết kế chi tiết cho đối tượng 
// trong 1 lớp chúng ta có thể tạo các phương thức lớp
class Person {
  constructor(firstName, lastName, age , country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  // class Method
  getFullname() {
    const fullName = this.firstName + " " + this.lastName
    return fullName
  }
}
const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki');
console.log(person1.getFullname()) // Asabeneh Yetayeh
//get method : cho phép chúng ta truy cập giá trị từ đối tượng
// chúng ta viết 1 phuong thức get 
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person1.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore);
//set method:cho phép chúng ta sửa đổi giá trị của 1 số thuộc tính
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const person3 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person3.setScore = 1
person3.setSkill = 'HTML'
person3.setSkill = 'CSS'
person3.setSkill = 'JavaScript'

person3.setScore = 1
person3.setSkill = 'Planning'
person3.setSkill = 'Managing'
person3.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)