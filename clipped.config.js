const path = require('path')

module.exports = async clipped => {
  clipped.config.dist = path.resolve(__dirname, 'build')

  clipped.config.pwa = !(process.env.TARGET === 'electron')

  await clipped.use(require('@clipped/preset-webpack4-frontend'))

  // BUG: jointed corrupts postcss plugin e.g tailwindcss, therefore using postcss.config.js for options for now
  clipped.config.webpack.module.rules.scss.use.postcss = require.resolve('postcss-loader')

  clipped.config.webpack.add('module.rules.css.include.rc-select', path.resolve(__dirname, 'node_modules/rc-select'))

  clipped.config.webpack['module.rules.node'] = {
    test: /\.node$/,
    include: [path.resolve(__dirname, 'node_modules/keytar')],
    use: 'node-loader'
  }

  clipped.config.webpack.set('module.rules.js.use.babel.options.plugins.ramda', [
    require.resolve('babel-plugin-ramda'),
    {
      'useES': true
    }
  ])

  // Adds tailwind css
  // clipped.config.webpack['module.rules.scss.use.postcss.options.plugins']
  //   .use('tailwind', require('tailwindcss'), [path.resolve(__dirname, 'tailwind.config.js')], 0)

  // clipped.config.webpack['module.rules.scss']
  //   .set('include.tailwind', path.resolve(__dirname, 'node_modules/tailwindcss'))

  // clipped.config.webpack['module.rules.css']
  //   .add('use.postcss.options.plugins.tailwind', require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js')), 0)
  //   .set('include.tailwind', path.resolve(__dirname, 'node_modules/tailwindcss'))

  clipped.hook('post-build')
    .add('copy-netlify-redirect', async clipped => {
      await clipped.copy([
        {src: clipped.resolve('_redirects'), dest: path.join(clipped.config.dist, '_redirects')}
      ])
      console.log('Copied redirects')
    })
}
