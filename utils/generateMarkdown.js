
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return 'https://spdx.org/licenses/MIT.html';
    case 'Apache 2.0':
      return 'https://spdx.org/licenses/Apache-2.0.html';
    case 'GPL v3.0':
      return 'https://spdx.org/licenses/GPL-3.0-or-later.html';
    case 'None':
      return ""
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge)';
    case 'Apache 2.0':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen?style=for-the-badge)'
    case 'GPL v3.0':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen?style=for-the-badge)';
    case 'None':
      return "no license"
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license}`
  }
  return licenseSection
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [Description](#description)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)

  ## Description
  ${data.description}
  ## License
  * This application is covered by ${renderLicenseLink(data.license)}.
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributions}
  ## Test
  ${data.test}

  ## Questions:
  ### If you have any questions, you may contact me at either
  ### Github: https://github.com/${data.username}
  ### or
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
