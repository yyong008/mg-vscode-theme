import colors from '../../designs/index.js'

const tsxFunctionKeyWord = {
  name: 'tsx::function',
  scope: ['storage.type.function.tsx', 'storage.type.function.jsx'],
  settings: {
    foreground: colors.purpleColors400,
    fontStyle: 'bold'
  }
}

const tsxFunctionParams = {
  name: 'tsx::params',
  scope: ['variable.parameter.tsx', 'variable.parameter.jsx'],
  settings: {
    foreground: colors.grayColors200
  }
}

const tsxArrowFunction = {
  name: 'tsx::arrow',
  scope: ['storage.type.function.arrow.tsx', 'storage.type.function.arrow.jsx'],
  settings: {
    foreground: colors.cyanColors500
  }
}

const tsxEntityFunctionAndCallParams = {
  name: 'tsx::entity-function-call',
  scope: [
    'entity.name.function.tsx',
    'meta.function-call.tsx',
    'entity.name.function.jsx',
    'meta.function-call.jsx'
  ],
  settings: {
    foreground: colors.cyanColors500
  }
}

export default [
  tsxFunctionKeyWord,
  tsxFunctionParams,
  tsxArrowFunction,
  tsxEntityFunctionAndCallParams
]
