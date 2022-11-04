import colors from '../../designs/index.js'

const importExportFromDefault = {
  js: [
    'keyword.control.import.js',
    'keyword.control.from.js',
    'keyword.control.export.js',
    'keyword.control.default.js'
  ],
  ts: [
    'keyword.control.import.ts',
    'keyword.control.from.ts',
    'keyword.control.export.ts',
    'keyword.control.default.ts'
  ],
  jsx: [
    'keyword.control.import.jsx',
    'keyword.control.from.jsx',
    'keyword.control.export.jsx',
    'keyword.control.default.jsx'
  ],
  tsx: [
    'keyword.control.import.tsx',
    'keyword.control.from.tsx',
    'keyword.control.export.tsx',
    'keyword.control.default.tsx'
  ]
}

const importContentScopes = {
  js: ['meta.import.js'],
  ts: ['meta.import.ts'],
  jsx: ['meta.import.jsx'],
  tsx: ['meta.import.tsx']
}

const importVariablesScopes = {
  js: ['variable.other.readwrite.alias.js', 'variable.other.object.js'],
  ts: ['variable.other.readwrite.alias.ts', 'variable.other.object.ts'],
  jsx: ['variable.other.readwrite.alias.jsx', 'variable.other.object.jsx'],
  tsx: ['variable.other.readwrite.alias.tsx', 'variable.other.object.tsx']
}

const expressionImportScopes = {
  js: ['keyword.operator.expression.import.js'],
  ts: ['keyword.operator.expression.import.ts'],
  jsx: ['keyword.operator.expression.import.jsx'],
  tsx: ['keyword.operator.expression.import.tsx']
}

const jsImportFromExportDefault = () => ({
  name: 'js::keywords::import/from/export/default',
  scope: [
    ...importExportFromDefault.js,
    ...importExportFromDefault.jsx,
    ...importExportFromDefault.ts,
    ...importExportFromDefault.tsx
  ],
  settings: {
    foreground: colors.grayColors600
  }
})

const jsFromStringKeyword = () => ({
  name: 'js::variable::import-content',
  scope: [
    ...importContentScopes.js,
    ...importContentScopes.jsx,
    ...importContentScopes.ts,
    ...importContentScopes.tsx
  ],
  settings: {
    foreground: colors.cyanColors400
  }
})

const jsImportVariables = () => ({
  name: 'js::import-variables',
  scope: [],
  settings: {
    foreground: colors.cyanColors400
  }
})

const jsVariableOtherReadwriteAlias = () => ({
  name: 'js::from::alias',
  scope: [
    ...importVariablesScopes.js,
    ...importVariablesScopes.jsx,
    ...importVariablesScopes.ts,
    ...importVariablesScopes.tsx
  ],
  settings: {
    foreground: colors.cyanColors400
  }
})

const jsDynamicImport = () => ({
  name: 'js::variable.other.readwrite.alias.js',
  scope: [
    ...expressionImportScopes.js,
    ...expressionImportScopes.jsx,
    ...expressionImportScopes.ts,
    ...expressionImportScopes.tsx
  ],
  settings: {
    foreground: colors.magentaColors500
  }
})

export default [
  jsImportFromExportDefault,
  jsFromStringKeyword,
  jsImportVariables,
  jsVariableOtherReadwriteAlias,
  jsDynamicImport
]
