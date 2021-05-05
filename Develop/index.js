// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Please include a description of your project', 'How can users install this application?', 'Please provide a list of instructions on how to use your application', 'How can users contribute to your application?', 'What are the tests associated with your project?', 'Enter your Github username', 'Enter your email address', 'Which license would you like for your project?'];

const licenses = ['Apache license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Creative Commons Zero', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution ShareAlike 4.0', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License v3.0', 'IBM v1.0', 'ISC', 'MIT', 'Mozilla Public License 2.0', 'The Perl License', 'SIL Open Font License 1.1', 'The Unlicense', 'zLib License']

const licensesObject = 
    {
        'Apache license 2.0': ['https://img.shields.io/badge/License-Apache%202.0-blue.svg', 'https://opensource.org/licenses/Apache-2.0'],
        'Boost Software License 1.0': ['https://img.shields.io/badge/License-Boost%201.0-lightblue.svg', 'https://www.boost.org/LICENSE_1_0.txt'],
        'BSD 2-clause "Simplified" license': ['https://img.shields.io/badge/License-BSD%202--Clause-orange.svg', 'https://opensource.org/licenses/BSD-2-Clause'],
        'BSD 3-clause "New" or "Revised" license': ['https://img.shields.io/badge/License-BSD%203--Clause-blue.svg', 'https://opensource.org/licenses/BSD-3-Clause'],
        'Creative Commons Zero v1.0 Universal': ['https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg', 'http://creativecommons.org/publicdomain/zero/1.0/'],
        'Creative Commons Attribution 4.0': ['https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg', 'https://creativecommons.org/licenses/by/4.0/'],
        'Creative Commons Attribution ShareAlike 4.0': ['https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg', 'https://creativecommons.org/licenses/by-sa/4.0/'],
        'Eclipse Public License 1.0': ['https://img.shields.io/badge/License-EPL%201.0-red.svg', 'https://www.eclipse.org/legal/epl-v10.html'],
        'GNU Affero General Public License v3.0': ['https://img.shields.io/badge/License-AGPL%20v3-blue.svg', 'https://www.gnu.org/licenses/agpl-3.0'],
        'GNU General Public License v2.0': ['https://img.shields.io/badge/License-GPL%20v2-blue.svg', 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'],
        'GNU General Public License v3.0': ['https://img.shields.io/badge/License-GPLv3-blue.svg', 'https://www.gnu.org/licenses/gpl-3.0.en.html'],
        'GNU Lesser General Public License v3.0': ['https://img.shields.io/badge/License-LGPL%20v3-blue.svg', 'https://www.gnu.org/licenses/lgpl-3.0'],
        'IBM v1.0': ['https://img.shields.io/badge/License-IPL%201.0-blue.svg', 'https://opensource.org/licenses/IPL-1.0'],
        'ISC': ['https://img.shields.io/badge/License-ISC-blue.svg', 'https://opensource.org/licenses/ISC'],
        'MIT': ['https://img.shields.io/badge/License-MIT-yellow.svg', 'https://opensource.org/licenses/MIT'],
        'Mozilla Public License 2.0': ['https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg', 'https://opensource.org/licenses/MPL-2.0'],
        'The Perl License': ['https://img.shields.io/badge/License-Perl-0298c3.svg', 'https://opensource.org/licenses/Artistic-2.0'],
        'SIL Open Font License 1.1': ['https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg', 'https://opensource.org/licenses/OFL-1.1'],
        'The Unlicense': ['https://img.shields.io/badge/license-Unlicense-blue.svg', 'https://unlicense.org/'],
        'zLib License': ['https://img.shields.io/badge/License-Zlib-lightgrey.svg', 'https://opensource.org/licenses/Zlib']
    }

// TODO: Create a function to write README file
function writeToFile(fileName, answer) {
    //logic here to write file
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
           type: 'input',
           message: questions[0],
           name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributing'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'tests'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email'
        },
        {
            type: 'list',
            message: questions[8],
            name: 'license',
            choices: licenses
        }
    ])
    .then(function(answer) {
        //try to make the users answer for the license a variable and input that variable into string for the licensesObject
        let userLicense = answer.license;
        let readMeData = 
        `# ${answer.title} ![License](${licensesObject[userLicense][0]})

## Description
${answer.description}

## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#license)
        
## Installation     
${answer.installation}
        
## Usage
${answer.usage}
        
## Contributing       
${answer.contributing}
        
## Tests        
${answer.tests}
        
## Questions       
If you have any questions please contact me by email or through my GitHub profile
        
* GitHub Profile: ${answer.github}
* Email: ${answer.email}
        
## License ![License](${licensesObject[userLicense][0]})     
Licensed under the ${answer.license} license. Use the following link for permissions and allowances:
${licensesObject[userLicense][1]}`
        
        fs.writeFile('SampleREADME.md', readMeData, function (err) {
            if (err) {
                return console.log(err);
            }
        })

    });
}

// Function call to initialize app
init();