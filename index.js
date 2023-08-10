//Necessary packages and paths
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//Array
const questions = [
  {
    type: 'input',
    message: 'Project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Project description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Usage:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Contribution guidelines:',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Test instructions:',
    name: 'testing',
  },
  {
    type: 'list',
    message: 'Choose a license:',
    name: 'license',
    choices: ['MIT', 'ISC', 'Zlib', 'none']
  },
  {
    type: 'input',
    message: 'Project owner Github:',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Project owner email:',
    name: 'email',
  },
];

//Creates .md file, names it, and sends data to the function that generates the file content
function writeToFile(data){
  try {
    const fileName = `${data.title}.md`;
    const markdownText = generateMarkdown(data);
    fs.writeFileSync(fileName, markdownText);
    console.log('Success!');
  } catch (err) {
    console.log(err);
  }
}

//Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      writeToFile(response)
    );
}

init();
