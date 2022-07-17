// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown.js")
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
    name: "Table of Contents"
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
    type: "list",
    name: "license",
    message: "Please enter the license for your project.",
    choices: ["MIT", "Apache", "GNU GPL", "None"],
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
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./output/README.md", data, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!",
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            console.log(response);
            var fileContent = generateMarkdown(response);
            writeToFile(fileContent)
        })
}

// Function call to initialize app
init();
