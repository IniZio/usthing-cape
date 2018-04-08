const path = require('path')

module.exports = async clipped => {
  clipped.config.dist = path.resolve(__dirname, 'build')
  await clipped.use(require('@clipped/preset-webpack4-frontend'))
}
