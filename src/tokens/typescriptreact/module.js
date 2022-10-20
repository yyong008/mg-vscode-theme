import colors from '../../designs/index.js'

const tsxImportFrom = {
  name: 'tsx::import/from',
  scope: [
    'keyword.control.import.tsx',
    'keyword.control.from.tsx',
    'keyword.control.export.tsx'
  ],
  settings: {
    foreground: colors.greenColors800
  }
}

const tsxFromStringKeyword = {
  name: 'tsx::from-content',
  scope: ['meta.import.tsx'],
  settings: {
    foreground: colors.limeColors500
  }
}

const tsxDefaultsxtringKeyword = {
  name: 'tsx::default-content',
  scope: ['keyword.control.default.tsx'],
  settings: {
    foreground: colors.greenColors300,
    fontStyle: 'bold'
  }
}

const tsxImportVariables = {
  name: 'tsx::default-content',
  scope: ['variable.other.readwrite.alias.tsx', 'variable.other.object.tsx'],
  settings: {
    foreground: colors.greenColors400
  }
}

const tsxVariableOtherReadwriteAlias = {
  name: 'tsx::alias',
  scope: ['variable.other.readwrite.alias.tsx', 'variable.other.readwrite.tsx'],
  settings: {
    foreground: colors.greenColors300
  }
}

const tsxDynamicImport = {
  name: 'tsx::dynamic-import',
  scope: ['keyword.operator.expression.import.tsx'],
  settings: {
    foreground: colors.magentaColors500,
    fontStyle: 'bold'
  }
}

const tsxImportExportAll = {
  name: 'tsx::import-export/all',
  scope: ['constant.language.import-export-all.tsx'],
  settings: {
    foreground: colors.greenColors400,
    fontStyle: 'bold'
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
