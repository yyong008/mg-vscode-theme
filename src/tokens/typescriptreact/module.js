import colors from '../../designs/index.js'

const tsxImportFrom = {
  name: 'tsx::import/from',
  scope: [
    'keyword.control.import.tsx',
    'keyword.control.from.tsx',
    'keyword.control.export.tsx',
    'keyword.control.default.tsx',
    'keyword.control.import.jsx',
    'keyword.control.from.jsx',
    'keyword.control.export.jsx',
    'keyword.control.default.jsx'
  ],
  settings: {
    foreground: colors.grayColors600
  }
}

const tsxFromStringKeyword = {
  name: 'tsx::from-content',
  scope: ['meta.import.tsx', 'meta.import.jsx'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const tsxDefaultsxtringKeyword = {
  name: 'tsx::default-content',
  scope: ['keyword.control.default.tsx', 'keyword.control.default.jsx'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const tsxImportVariables = {
  name: 'tsx::default-content',
  scope: [
    'variable.other.readwrite.alias.tsx',
    'variable.other.object.tsx',
    'variable.other.readwrite.alias.jsx',
    'variable.other.object.jsx'
  ],
  settings: {
    foreground: colors.cyanColors400
  }
}

const tsxVariableOtherReadwriteAlias = {
  name: 'tsx::alias',
  scope: [
    'variable.other.readwrite.alias.tsx',
    'variable.other.readwrite.tsx',
    'variable.other.readwrite.alias.jsx',
    'variable.other.readwrite.jsx'
  ],
  settings: {
    foreground: colors.cyanColors300
  }
}

const tsxDynamicImport = {
  name: 'tsx::dynamic-import',
  scope: [
    'keyword.operator.expression.import.tsx',
    'keyword.operator.expression.import.jsx'
  ],
  settings: {
    foreground: colors.magentaColors500
  }
}

const tsxImportExportAll = {
  name: 'tsx::import-export/all',
  scope: [
    'constant.language.import-export-all.tsx',
    'constant.language.import-export-all.jsx'
  ],
  settings: {
    foreground: colors.cyanColors400
  }
}

export default [
  tsxImportFrom,
  tsxFromStringKeyword,
  tsxDefaultsxtringKeyword,
  tsxImportVariables,
  tsxVariableOtherReadwriteAlias,
  tsxDynamicImport,
  tsxImportExportAll
]
