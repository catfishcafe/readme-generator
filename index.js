//❌ If a line has '❌' it means 'delete this comment before final version'

//❌ TODO: Include packages needed for this application
//❌ Use the 'require' function for Inquirer
//❌from 09.14:
//❌const badmath = require('badmath');

const inquirer = require('inquirer');

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
        message: 'Installation instructions for your project:',
        name: 'instructions',
      },
    //❌ I'll finish the prompts later
    ])
    .then((response) =>
      //❌I imagine the responses will need to be sent to another function...
    );


const questions = [];

//❌ TODO: Create a function to write README file
//❌I have a sneaking suspicion this will involve the generateMarkdown.js
function writeToFile(fileName, data) {}

//❌ TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
