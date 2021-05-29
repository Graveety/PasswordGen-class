import User from "./user";

 export default  class Student extends User {

   
    classId="";
    teacherId=""; 
    classInfo:any;
    teacher:any;
   private schoolFee="# 500,000.00"


    constructor(){
        super()
    }
    

    add(firstName:string,lastName:string,classId:string,teacherId:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.classId = classId;
        this.teacherId = teacherId;
    }


    showBio(){
        return `
        Name: ${this.fullName()}
        Origin: ${this.country}
        School Fee: ${this.schoolFee}
        Class:
        Teacher:
        `
    }


}
 