const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const files = require('./lib/files')

clear();

console.log(
    chalk.yellow(
        figlet.textSync('fastGit', { horizontalLayout: 'full' })
    )
)

if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'))
    process.exit()
}

const inquirer = require('./lib/inquirer')

/* const run = async () => {
    const credentials = await inquirer.askGithubCredentials()
    console.log(credentials)
  } */

const run = async () => {
    let token = github.getStoredGithubToken()
    if(!token) {
      token = await github.getPersonalAccesToken()
    }
    console.log(token)
  }

run()