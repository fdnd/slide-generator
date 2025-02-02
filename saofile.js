const superb = require('superb')
const chalk = require('chalk')
const { execSync } = require('child_process')

const packages = [
  '@sveltejs/adapter-static',
  'reveal.js',
  '@fontsource/jetbrains-mono',
  'gsap'
]


module.exports = {
  prepare() {
    // Execute sv create using child_process
    const outdir = this.outFolder.replace(process.cwd() + '/', '')
    execSync(`mkdir ${outdir} && cd ${outdir} && npx sv create ./ --template minimal --no-types --no-add-ons`, { stdio: 'inherit' })
  },
  prompts() {
    return [
      {
        name: 'sprintNumber',
        message: 'Sprint number (will be used for naming the project)',
        default: '12',
        filter: val => val.toLowerCase(),
        validate: function (value) {
          const invalid = value.match(
            /[A-Z]|\s|[^a-zA-Z0-9_-]/
          )
          if (invalid) {
            return 'Please enter a valid name without uppercase, whitespaces, or symbols'
          }
          return true
        }
      },
      {
        name: 'presentationNiceName',
        message: 'Presentation nice name (pretty name used for presentation meta title and slide headers etc.)',

        default: this.outFolder.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase()),
      },
      {
        name: 'presentationNameWithoutSpaces',
        message: 'Presentation name without spaces (used for package name, local and git)',
        default: this.outFolder,
      },
      {
        name: 'description',
        message: 'Presentation description (optional)',
        default: `My ${superb.random()} presentation`
      },
      {
        name: 'author',
        message: 'Author name',
        type: 'string',
        default: this.gitUser.name,
        store: true
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'remove',
      files: 'src/routes'
    },
    {
      type: 'move',
      patterns: {
        'routes': 'src/routes',
        'deck': 'src/lib/deck',
        'global.css': 'static/global.css',
        'favicon.png': 'static/favicon.png',
        'app.html': 'src/app.html',
        'README.md': 'README.md',
        'svelte.config.js': 'svelte.config.js',
        'gitignore': '.gitignore',
      }
    }
  ],
  async completed() {
    this.gitInit()

    await this.npmInstall({
      packages,
      saveDev: true
    })

    this.showProjectTips()

    console.log()
    console.log(chalk.bold('  To get started:\n'))
    console.log('	- Go to project dir (if not already present)')
    console.log(`		${chalk.hex('#ff69b4')(`cd ${this.outFolder}`)}`)
    console.log('	- Start dev')
    console.log(`		${chalk.hex('#ff69b4')('npm run dev')}`)
    console.log('	- Start developing!')
    console.log()
  }
}
