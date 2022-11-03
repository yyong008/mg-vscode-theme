import colors from '../../designs/index.js'

const functionScopes = {
  js: ['storage.type.function.js'],
  jsx: ['storage.type.function.jsx'],
  ts: ['storage.type.function.ts'],
  tsx: ['storage.type.function.js']
}

const fnParameterScopes = {
  js: ['variable.parameter.js'],
  jsx: ['variable.parameter.jsx'],
  ts: ['variable.parameter.ts'],
  tsx: ['variable.parameter.tsx']
}

const arrowFnScopes = {
  js: ['storage.type.function.arrow.js'],
  jsx: ['storage.type.function.arrow.jsx'],
  ts: ['storage.type.function.arrow.ts'],
  tsx: ['storage.type.function.arrow.tsx']
}

const fnNameScopes = {
  js: ['entity.name.function.js'],
  jsx: ['entity.name.function.jsx'],
  ts: ['entity.name.function.ts'],
  tsx: ['entity.name.function.tsx']
}
const fnCallScopes = {
  js: ['meta.function-call.js'],
  jsx: ['meta.function-call.jsx'],
  ts: ['meta.function-call.ts'],
  tsx: ['meta.function-call.tsx']
}

const jsFunctionKeyWord = () => ({
  name: 'js::function',
  scope: [
    ...functionScopes.js,
    ...functionScopes.jsx,
    ...functionScopes.ts,
    ...functionScopes.tsx
  ],
  settings: {
    foreground: colors.purpleColors400,
    fontStyle: 'bold'
  }
})

const jsFunctionParams = () => ({
  name: 'js::params',
  scope: [
    ...fnParameterScopes.js,
    ...fnParameterScopes.jsx,
    ...fnParameterScopes.ts,
    ...fnParameterScopes.tsx
  ],
  settings: {
    foreground: colors.grayColors400
  }
})

const jsArrowFunction = () => ({
  name: 'js::arrow',
  scope: [
    ...arrowFnScopes.js,
    ...arrowFnScopes.ts,
    ...arrowFnScopes.jsx,
    ...arrowFnScopes.tsx
  ],
  settings: {
    foreground: colors.cyanColors700
  }
})

const jsEntityFunctionAndCallParams = () => ({
  name: 'js::entity-function-call',
  scope: [
    ...fnNameScopes.js,
    ...fnNameScopes.jsx,
    ...fnNameScopes.ts,
    ...fnNameScopes.tsx,
    //
    ...fnCallScopes.js,
    ...fnCallScopes.jsx,
    ...fnCallScopes.ts,
    ...fnCallScopes.tsx
  ],
  settings: {
    foreground: colors.cyanColors700
  }
})

export default [
  jsFunctionKeyWord,
  jsFunctionParams,
  jsArrowFunction,
  jsEntityFunctionAndCallParams
]
