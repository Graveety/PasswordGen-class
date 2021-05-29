export default class User{


    firstName="";
    lastName="";
    country="NG"; 

    constructor(){}

    fullName(){
    return this.firstName + " " + this.lastName;
    }

}