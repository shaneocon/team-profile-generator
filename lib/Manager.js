// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// npm test -- -u -t="Engineer"
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// npm test -- -u -t="Engineer"
const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    
    }

    getOfficeNumber(){
        console.log(this.officeNumber);
        return this.officeNumber;
    }

    getRole() {
        console.log("Manager");
        return "Manager";
    }
}

module.exports = Manager;