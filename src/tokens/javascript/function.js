import colors from '../../designs/index.js'

const jsFunctionKeyWord = {
  name: 'js::function',
  scope: ['storage.type.function.js'],
  settings: {
    foreground: colors.purpleColors400,
    fontStyle: 'bold'
  }
}

const jsFunctionParams = {
  name: 'js::params',
  scope: ['variable.parameter.js'],
  settings: {
    foreground: colors.grayColors400
  }
}

const jsArrowFunction = {
  name: 'js::arrow',
  scope: ['storage.type.function.arrow.js'],
  settings: {
    foreground: colors.cyanColors700
  }
}

const jsEntityFunctionAndCallParams = {
  name: 'js::entity-function-call',
  scope: ['entity.name.function.js', 'meta.function-call.js'],
  settings: {
    foreground: colors.cyanColors700
  }
}

export default [
  jsFunctionKeyWord,
  jsFunctionParams,
  jsArrowFunction,
  jsEntityFunctionAndCallParams
]
