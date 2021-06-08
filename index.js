#!/usr/bin/env node

/**
 * cli-img-codeword7
 * CLI to resize and optimize images
 * 
 * @author Neeraj Kumar <https://twitter.com/codeword007>
 */

const init = require('./utils/init')
const cli = require('./utils/cli')
const log = require('./utils/log')

const input = cli.input
const flags = cli.flags
const { clear, debug } = flags

const start = async () => {
  init({ clear })
  input.includes(`help`) && cli.showHelp(0)

  debug && log(flags)
}

start()