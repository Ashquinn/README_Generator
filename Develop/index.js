// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Please include a description of your project', 'How can users install this application?', 'Please provide a list of instructions on how to use your application', 'How can users contribute to your application?', 'What are the tests associated with your project?', 'Enter your Github username', 'Enter your email address', 'Which license would you like for your project?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
           type: 'input',
           message: questions[0],
           name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributing'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'tests'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email'
        },
        {
            type: 'checkbox',
            message: questions[8],
            name: 'license',
            choices: []
            //Input choices for the licenses
        }
    ])
}

// Function call to initialize app
init();