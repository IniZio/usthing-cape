const path = require('path')
const tailwindcss = require('tailwindcss')

module.exports = async clipped => {
  clipped.config.dist = path.resolve(__dirname, 'build')

  clipped.config.pwa = !(process.env.TARGET === 'electron')

  await clipped.use(require('@clipped/preset-webpack4-frontend'))

  // Adds tailwind css
  clipped.config.webpack['module.rules.css']
    .set('use.postcss.options.plugins.tailwind', tailwindcss(path.resolve(__dirname, 'tailwind.config.js')))
    .set('include.tailwind', path.resolve(__dirname, 'node_modules/tailwindcss'))
}
