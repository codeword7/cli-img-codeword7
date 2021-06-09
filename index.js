#!/usr/bin/env node

/**
 * cli-img-codeword7
 * CLI to resize and optimize images
 * 
 * @author Neeraj Kumar <https://twitter.com/codeword007>
 */
const resizeOptimizeImages = require('resize-optimize-images')
const init = require('./utils/init')
const cli = require('./utils/cli')
const log = require('./utils/log')

const input = cli.input
const flags = cli.flags
const { clear, debug, source, width, quality } = flags

const start = async () => {
  init({ clear })
  input.includes(`help`) && cli.showHelp(0)

  const defaultOptions = {
    width: 1920,
    quality: 90
  }

  const options = {
    ...defaultOptions,
    images: source,
    width,
    quality
  }

  await resizeOptimizeImages(options)
  debug && log(flags)
}

start()