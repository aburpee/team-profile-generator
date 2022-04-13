const inquirer = require('inquirer');

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the employees name',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log('please enter the employees name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the employee id number',
            validate: idInput => {
                if(idInput) {
                    return true;
                }
                else {
                    console.log('please enter the employee id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the employee email',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                }
                else {
                    console.log('please enter the employee email');
                    return false;
                }
            }
        }
    ])
}