// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    console.log('no badge')
    return ""
  } else {
    return '![License: ' + license + '](https://img.shields.io/badge/License-' + license + '-yellow.svg)'
  }
}
//❌I don't see a GPL badge so I'll test this with MIT and pick a different third option :/

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    console.log('no license link')
    return ""
  } else {
    return 'https://opensource.org/licenses/' + license
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    console.log('no license section')
    return ""
  } else {
    return 'License'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseLink(data.license)
  return `
  # ${data.title}
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
  ## ${renderLicenseSection(data.license)}
  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})
  ## Questions
  <p>Please contact the project owner with the information below:</p>
  Github: ${data.github} <br>
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
