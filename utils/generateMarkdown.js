// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return 'https://spdx.org/licenses/AGPL-3.0-or-later.html';
    case 'GNU GPLv3':
      return 'https://spdx.org/licenses/GPL-3.0-or-later.html';
    case 'GNU LGPLv3':
      return 'https://spdx.org/licenses/LGPL-3.0-or-later.html';
    case 'Mozilla Public License 2.0':
      return 'https://spdx.org/licenses/MPL-2.0.html';
    case 'Apache License 2.0':
      return 'https://spdx.org/licenses/Apache-2.0.html';
    case 'MIT':
      return 'https://spdx.org/licenses/MIT.html';
    case 'Boost Software License 1.0':
      return 'https://spdx.org/licenses/BSL-1.0.html';
    case 'The Unlicense':
      return 'https://spdx.org/licenses/Unlicense.html';
    case 'ISC':
      return 'https://spdx.org/licenses/ISC.html'
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge)';
    case 'Boost Software License 1.0':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-Boost%20Software-brightgreen?style=for-the-badge)'
    case 'The Unlicense':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-The%20Unlicense-brightgreen?style=for-the-badge)';
    case 'ISC':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-ISC-brightgreen?style=for-the-badge)'
    case 'GNU GPLv3':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen?style=for-the-badge)';
    case 'GNU AGPLv3':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-GNU%20AGPLv3-brightgreen?style=for-the-badge)';
    case 'GNU LGPLv3':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-GNU%20LGPLv3-brightgreen?style=for-the-badge)'
    case 'Mozilla Public License 2.0':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen?style=for-the-badge)'
    case 'Apache License 2.0':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen?style=for-the-badge)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
