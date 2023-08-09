//❌ If a line has '❌' it means 'delete this comment before final version'

//❌ TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

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
  ])
  .then((response) =>
  //I think writeToFile will be called here?
    // writeToFile(response.title, response.description),
    // console.log(response)
    testFunction(response)
  );

// const questions = [];
//❌do I need this 'const questions'? I don't exactly how this relates to the above...

//❌ TODO: Create a function to write README file
//❌I have a sneaking suspicion this will involve the generateMarkdown.js

//❌like in 09.13, creating a README markdown file
//❌ commented out ftm

//need to pass it data from inquirer...I don't know if it's passed to both things at the same time or first to inquirer and then to writeToFile

function testFunction(response){
  const data = `${response.description}`;
  console.log(data);
  fs.writeFileSync(`${response.title}.md`, data)
}

// function writeToFile(fileName, data) {
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
