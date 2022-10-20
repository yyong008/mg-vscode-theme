import colors from '../../designs/index.js'

const tsLoop = {
  name: 'ts::loop',
  scope: ['keyword.control.loop.ts', 'keyword.operator.expression.of.ts'],
  settings: {
    foreground: colors.purpleColors400,
    fontStyle: 'italic bold'
  }
}

export default [tsLoop]
