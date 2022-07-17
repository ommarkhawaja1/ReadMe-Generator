// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
},
{
    type: "input",
    message: "What is the project about? Please provide a short description.",
    name: "Description"
},
{
    type: "input",
    message: "Table of Contents",
    name: "Table of Conetents"
},
{
    type: "input",
    message: "What are the steps required to install this project? What dependencies did you use?",
    name: "Installation"
},
{
    type: "input",
    message: "How is this app used?",
    name: "Usage"
},
{
    type: "input",
    message: "What license is being used?",
    name: "License"
},
{
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributions"
},
{
    type: "input",
    message: "What is your Github username?",
    name: "username"
},
{
    type: "input",
    message: "What is your email address?",
    name: "Email"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
