import colors from '../../designs/index.js'

const asyncAwait = {
  name: 'js::async-await',
  scope: ['storage.modifier.async.js', 'keyword.control.flow.js'],
  settings: {
    foreground: colors.magentaColors400,
    fontStyle: 'bold'
  }
}

export default [asyncAwait]
