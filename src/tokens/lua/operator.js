import colors from '../../designs/index.js'

const luaOperator = () => ({
  name: 'lua::keywords::operator',
  scope: ['keyword.operator.lua'],
  settings: {
    foreground: colors.magentaColors600,
    fontStyle: 'bold'
  }
})

export default [luaOperator]
