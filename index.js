#!/usr/bin/env node

/**
 * cli-img-codeword7
 * CLI to resize and optimize images
 * 
 * @author Neeraj Kumar <https://twitter.com/codeword007>
 */
const resizeOptimizeImages = require('resize-optimize-images')
const alert = require('cli-alerts-codeword7')
const ora = require('ora');
const { yellow: y, green: g } = require('chalk')

const globby = require('globby')
const init = require('./utils/init')
const cli = require('./utils/cli')
const log = require('./utils/log')

const input = cli.input
const flags = cli.flags
const { clear, debug, source, width, quality } = flags
const spinner = ora({ text: '' })

const start = async () => {
  init({ clear })
  input.includes(`help`) && cli.showHelp(0)

  if (source) {
    const images = await globby(source)

    const options = {
      ...defaultOptions,
      images,
      width: width ? width : 1920,
      quality: quality ? quality : 90
    }

    spinner.start(`${y(`RUNNING`)} optim and resize task on ${images.length} images...`)
    await resizeOptimizeImages(options)
    spinner.succeed(`${g(`COMPLETED`)} optim and resize task on ${images.length} images...`)

    alert({
      type: 'success',
      name: 'DONE',
      msg: `Resize and optimized ${images.length} images`
    })

  } else {
    alert({
      type: 'error',
      msg: 'You forgot to specify --source flag'
    })
  }
  console.log()
  debug && log(flags)
}

start()