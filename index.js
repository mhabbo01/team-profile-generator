const generatePage = require('./src/generatePage');

const fs = require('fs');
const inquirer = require("inqurer");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your teams manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("please enter the name of your manager!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID for your manager?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter the employee Id for the manager!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter your manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Please enter your manager's office number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, employeeId, email, officeNumber } = managerInput;
        const manager = new Manager (name, employeeId, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log (`
    ===============
    Add employee(s)
    ===============
    `)

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of this team member?',
            choices: ["Engineer", "Intern"],
            validate: role => {
                if (role) {
                    return true;
                } else {
                    console.log("Please select a role for the team member!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this team member?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter the name of this team member!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is their employee ID?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log("Please enter the employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter the employee's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: "github",
            message: "What is the employee's github username?",
            when: (answers) => answers.role === "Engineer",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("What is the employee's github username?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school.",
            when: (answers) => answers.role === "Intern",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter intern's school!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Add more employees?',
            default: false
        }
    ])
    .then(employeeData => {
        let { role, name, email, id, github, school, addEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if(addEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};