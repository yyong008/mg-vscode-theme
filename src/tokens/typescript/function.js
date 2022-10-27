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
    foreground: colors.grayColors400
  }
}

const tsArrowFunction = {
  name: 'ts::arrow',
  scope: ['storage.type.function.arrow.ts'],
  settings: {
    foreground: colors.cyanColors700
  }
}

const tsEntityFunctionAndCallParams = {
  name: 'ts::entity-function-call',
  scope: ['entity.name.function.ts', 'meta.function-call.ts'],
  settings: {
    foreground: colors.cyanColors700
  }
}

export default [
  tsFunctionKeyWord,
  tsFunctionParams,
  tsArrowFunction,
  tsEntityFunctionAndCallParams
]
