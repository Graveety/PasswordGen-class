import Student from "./module/student";
import Teacher from "./module/teacher";


/// Student Class Model
const student = new Student();

student.add("Victory","Stubborn","-","-")
/// Teacher Class Model
const teacher = new Teacher();


teacher.add("Tovia","Wicked",["Math","English"],["SS1","SS2","SS3"])
teacher.add("Debora","Good",["Literature","History"],["SS3"])
teacher.add("Hope","Evil",["government","Biology"],["SS1","SS3"])
teacher.add("Gbenga","Good",["Physic","Chemistry"],["SS1","SS2"])
 
// teacher.showTeachersBio()

// const pw1 = teacher.generatePassword()
// const pw2 = teacher.generatePassword()
// const pw3 = teacher.generatePassword()
// const pw4 = teacher.generatePassword()
// const pw5 = teacher.generatePassword()
// const pw6 = teacher.generatePassword()
// const pw7 = teacher.generatePassword()
// const pw8 = teacher.generatePassword()
// const pw9 = teacher.generatePassword()
// const pw10 = teacher.generatePassword()
// console.log(pw1,pw1.length) 
// console.log(pw2,pw2.length) 
// console.log(pw3,pw3.length) 
// console.log(pw4,pw4.length) 
// console.log(pw5,pw5.length) 
// console.log(pw6,pw6.length) 
// console.log(pw7,pw7.length) 
// console.log(pw8,pw8.length) 
// console.log(pw9,pw9.length) 
// console.log(pw10,pw10.length) 

console.log(teacher.generateUid(5,7))
console.log(teacher.generateUid(10,15))
console.log(teacher.generateUid(4,5))
console.log(teacher.generateUid(50,100))