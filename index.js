//❌ If a line (or section) has '❌' it means 'delete this comment before final version'

//Necessary packages and paths
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//❌ TODO: Create an array of questions for user input
//❌From assignment:
  //WHEN I enter my project title
  // THEN this is displayed as the title of the README
  // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  // WHEN I choose a license for my application from a list of options
  // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  // WHEN I enter my GitHub username
  // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  // WHEN I enter my email address
  // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//❌...so the prompts are 'title', 'description', 'installation instructions', 'usage information', 'contribution guidelines', 'test instructions', 'license', 'GitHub username', 'email' ...not sure about that last part about the instructiosn on 'how to reach me', is that a separate prompt?

inquirer
  .prompt([
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
      type: 'input',
      message: 'Project owner Github:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Project owner email:',
      name: 'email',
    },
  ])
  .then((response) =>
  //I think writeToFile will be called here?
    // writeToFile(response.title, response.description),
    // console.log(response)
    writeToFile(response)
  );

// const questions = [];
//❌I'm pretty sure I don't need this, but it was part of the starter code so I'm hanging onto it for a bit

//❌ TODO: Create a function to write README file

function writeToFile(data){
  console.log(data);
  fs.writeFileSync(`${data.title}.md`, generateMarkdown(data))
}

// function writeToFile2(fileName, data) {
//     fs.writeFile(fileName + '.md', process.argv[2], (err) =>
//     err ? console.error(err) : console.log('Success!')
//   );
// }

//❌ TODO: Create a function to initialize app
//❌ commented out ftm
//function init() {}

// Function call to initialize app
//❌ commented out ftm
//init();
