import colors from '../../designs/index.js'

const tsFunctionKeyWord = {
  name: 'ts::function',
  scope: ['storage.type.function.ts'],
  settings: {
    foreground: colors.purpleColors400,
    fontStyle: 'bold'
  }
}

const tsFunctionParams = {
  name: 'ts::params',
  scope: ['variable.parameter.ts'],
  settings: {
    foreground: colors.goldColors600
  }
}

const tsArrowFunction = {
  name: 'ts::arrow',
  scope: ['storage.type.function.arrow.ts'],
  settings: {
    foreground: colors.blueColors500
  }
}

const tsEntityFunctionAndCallParams = {
  name: 'ts::entity-function-call',
  scope: ['entity.name.function.ts', 'meta.function-call.ts'],
  settings: {
    foreground: colors.blueColors500
  }
}

export default [
  tsFunctionKeyWord,
  tsFunctionParams,
  tsArrowFunction,
  tsEntityFunctionAndCallParams
]
