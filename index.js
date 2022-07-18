
const inquirer = require("inquirer")
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown.js")

const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title"
},
{
    type: "list",
    name: "license",
    message: "Please enter the license for your project.",
    choices: ["MIT", "Apache 2.0", "GPL v3.0", "None"],
},
{
    type: "input",
    message: "What is the project about? Please provide a short description.",
    name: "description"
},
{
    type: "input",
    message: "What are the steps required to install this project? What dependencies did you use?",
    name: "installation"
},
{
    type: "input",
    message: "How is this app used?",
    name: "usage"
},
{
    type: "input",
    message: "Who contributed to this project?",
    name: "contributions"
},
{
    type: "input",
    message: "How do you test this project",
    name: "test"
},
{
    type: "input",
    message: "What is your Github username?",
    name: "username"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
}
];


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
