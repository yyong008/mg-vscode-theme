import colors from '../../designs/index.js'

const luaFunctionKeyWord = {
  name: 'lua::function',
  scope: ['storage.type.function.lua'],
  settings: {
    foreground: colors.purpleColors400,
    fonluatyle: 'bold'
  }
}

const luaFunctionParams = {
  name: 'lua::params',
  scope: ['meta.function.lua'],
  settings: {
    foreground: colors.goldColors600
  }
}

const luaEntityFunctionAndCallParams = {
  name: 'lua::entity-function-call',
  scope: ['support.function.lua'],
  settings: {
    foreground: colors.blueColors500
  }
}

export default [
  luaFunctionKeyWord,
  luaFunctionParams,
  luaEntityFunctionAndCallParams
]
