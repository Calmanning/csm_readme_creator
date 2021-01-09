const fs = require('fs');
const inquirer = require('inquirer');


// Psuedo Codez
// TODO: create a prompt of inquirer Q's
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'emailAddress',
        },
        {
            type: 'input',
            message: "What is your project's name",
            name: 'project',
        },
        {
            type: 'input',
            message: 'Can you write a description of the project?',
            name: 'description',
        },
        {
            name: 'license',
            type: 'list',
            message: 'What license should your project have?',
            choices: ['MIT','Apache 2.0','GPL 3.0','BSD 3','None']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What command should be given to run tests?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What does the user need to know about the repo?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What does the user need to know to contributing to the repo?',
            name: 'contribute',
        },
    ])
    .then((response) => {
        console.log(response);
        const readMeOutput = `# ${response.project}
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Description 

PROJECT DESCRIPTION

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Test](#tests)

* [Questions](#questions)

## Installation

To install necesarry dependencies, run the following in your terminal:


${response.install}


## Usage 

USAGE NOTE

## License

This project is licensed under the ${response.license} license.

## Contributing

${response.contribute}

## Test

Enter the following to run tests on this project:


${response.test}


## Questions

For questions you can reach out to ${response.username} on GitHub, or email them at ${response.emailAddress}

`
        fs.writeFile(`${response.name}.md`, readMeOutput, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("well done jabrone")
            }
        })

    })