// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        console.log(this.name);
        return `${this.name}`;
    }

    getId() {
        console.log(this.id);
        return `${this.id}`;
    }
    getRole() {
        console.log(this.role);
        return "Employee";
    }
    getEmail() {
        console.log(this.email);
        return `${this.email}`;
    } 
    printInfo() {
        console.log(`This Employee has ${this.role}`);
    }
}

module.exports = Employee;