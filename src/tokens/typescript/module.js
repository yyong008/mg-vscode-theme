import colors from '../../designs/index.js'

const tsImportFrom = {
  name: 'ts::keywords::import/from/export/default',
  scope: [
    'keyword.control.import.ts',
    'keyword.control.from.ts',
    'keyword.control.export.ts',
    'keyword.control.default.ts'
  ],
  settings: {
    foreground: colors.grayColors100
  }
}

const tsFromStringKeyword = {
  name: 'ts::variable::import-content',
  scope: ['meta.import.ts'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const tsDefaultStringKeyword = {
  name: 'ts::default-content',
  scope: ['keyword.control.default.ts'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const tsImportVariables = {
  name: 'ts::default-content',
  scope: ['variable.other.readwrite.alias.ts', 'variable.other.object.ts'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const tsVariableOtherReadwriteAlias = {
  name: 'ts::alias',
  scope: ['variable.other.readwrite.alias.ts', 'variable.other.readwrite.ts'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const tsDynamicImport = {
  name: 'ts::import::dynamic',
  scope: ['keyword.operator.expression.import.ts'],
  settings: {
    foreground: colors.magentaColors500
  }
}

const tsImportExportAll = {
  name: 'ts::import::export::all',
  scope: ['constant.language.import-export-all.ts'],
  settings: {
    foreground: colors.cyanColors400
  }
}

export default [
  tsImportFrom,
  tsFromStringKeyword,
  tsDefaultStringKeyword,
  tsImportVariables,
  tsVariableOtherReadwriteAlias,
  tsDynamicImport,
  tsImportExportAll
]
