//Function that returns a license badge based on which license is passed in; if there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ""
  } else {
    return '![License: ' + license + '](https://img.shields.io/badge/License-' + license + '-yellow.svg)'
  }
}

//Function that returns the license link; if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return ""
  } else {
    return '(https://opensource.org/licenses/' + license + ')<br> This application is covered under the above license'
  }
}

//Function that returns the license section of README; if there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ""
  } else {
    return 'License'
  }
}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## ${renderLicenseSection(data.license)}
  [${renderLicenseBadge(data.license)}]${renderLicenseLink(data.license)}
  ## Table of Contents
  - [Description](#description)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Contributing](#contributing)  
  - [Tests](#tests)  
  - [Questions](#questions)  
## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.testing}
  ## Questions
  Please contact the project owner with the information below:  
  Github: [${data.github}](https://github.com/${data.github})  
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
