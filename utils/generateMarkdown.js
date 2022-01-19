// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[license](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
            This project is licensed under ${license} license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
    ${data.description}

  ## Table of Contents (Optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
    ${data.installation};

  ## Usage
  [Click for video walkthrough.](https://watch.screencastify.com/v/oNNiv6lZvPtvtPcSyiZS)
    
    ${data.usage}

  ## License
    This project is licensed under ${data.license}.

  ## Contributing
    ${data.contributing}

  ## Questions
  [Click for GitHub Profile.](https://github.com/${data.githubuser})

  [Click to email.](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
