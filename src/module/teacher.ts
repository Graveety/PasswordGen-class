import User from "./user";


 export default  class Teacher extends User {

     teachers:Array<Teacher> =[]
    assigned=[""];
    subject=[""]; 
    
    private salary = "# 200,000.00"


    constructor(){
        super()
    }

    add(firstName:string,lastName:string,subject:Array<string>,assigned:Array<string>){
       const newTeacher = new Teacher();
       newTeacher.firstName = firstName;
       newTeacher.lastName = lastName;
       newTeacher.subject = subject;
       newTeacher.assigned = assigned;
        this.teachers.push(newTeacher)
    }

    increaseSalary(){
        this.salary = "# 500,000.00"
    }

    reAssign(){
        this.assigned = ["JSS1","JSS2"]
    }
    
    showBio(){
        return `
        Name: ${this.fullName()}
        Origin: ${this.country}
        Salary: ${this.salary}
        Assigned:
        Subjects:
        `
    }

    random(min:number,max:number){
        return Math.floor(Math.random() * (max-min)+1)+min
    }

    generatePassword(){
        const str = "*-/!@#$%%+=ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz";
        const limit = this.random(16,18);

        let password="";

        while(password.length<(limit-4)){
            const charIndex = this.random(0,str.length);
            password+=str[charIndex];
        }
        while(password.length<limit){
            const charIndex = this.random(0,password.length)
            const sub1 = password.substr(0,charIndex)||"";
            const sbu2 = password.substr(charIndex,password.length)||"";
            password = sub1+ "0" + sbu2;
        }
        return password;
    }

    generateUid(min:number,max:number){
        const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz";
        const limit = this.random(min,max);

        let uid="";

        while(uid.length<limit){
            const charIndex = this.random(0,str.length);
            uid+=str[charIndex];
        }
        return uid;
    }

    showTeachersBio(){
    console.table(this.teachers)
    }


}
 