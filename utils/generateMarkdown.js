// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ""
  } else {
    return '![License: ' + license + '](https://img.shields.io/badge/License-' + license + '-yellow.svg)'
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    console.log('no license link')
    return ""
  } else {
    return '(https://opensource.org/licenses/' + license + ')<br> This application is covered under the above license'
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    console.log('no license section')
    return ""
  } else {
    return 'License'
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## ${renderLicenseSection(data.license)}
  [${renderLicenseBadge(data.license)}]${renderLicenseLink(data.license)}
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
