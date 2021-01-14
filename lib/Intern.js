// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// npm test -- -u -t="Engineer"
const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    
    }

    getSchool(){
        console.log(this.school);
        return this.school;
    }

    getRole() {
        console.log("Intern");
        return "Intern";
    }
}

module.exports = Intern;