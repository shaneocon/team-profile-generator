// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// npm test -- -u -t="Engineer"

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    
    }

    getGitHub(){
        console.log(this.github);
        return this.github;
    }
}

module.exports = Engineer;