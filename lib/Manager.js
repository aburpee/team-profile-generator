const Employee = require('./Employee');

class Manager extends Employee {
    construtor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;