import colors from '../../designs/index.js'

const tsxLoop = {
  name: 'tsx::loop',
  scope: ['keyword.control.loop.tsx', 'keyword.operator.expression.of.tsx'],
  settings: {
    foreground: colors.purpleColors400,
    fontStyle: 'italic bold'
  }
}

export default [tsxLoop]
