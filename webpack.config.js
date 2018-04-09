const path = require('path')

const getPostcssOptions = () => ({
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: 'postcss',
  plugins: [
    require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js')),
    require('postcss-flexbugs-fixes'), // eslint-disable-line import/no-extraneous-dependencies
    require('autoprefixer')({ // eslint-disable-line import/no-extraneous-dependencies
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ],
      flexbox: 'no-2009'
    })
  ]
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/tailwindcss')
        ],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              getPostcssOptions
            }
          }
        ]
      }
    ]
  }
}
