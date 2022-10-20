import colors from '../../designs/index.js'

const luaLoop = {
  name: 'lua::loop',
  scope: ['keyword.control.loop.lua', 'keyword.operator.expression.of.lua'],
  settings: {
    foreground: colors.purpleColors400,
    fonluatyle: 'italic bold'
  }
}

export default [luaLoop]
