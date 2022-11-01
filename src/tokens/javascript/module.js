import colors, { getRuntimeColors } from '../../designs/index.js'

const jsImportFromExportDefault = {
  name: 'js::keywords::import/from/export/default',
  scope: [
    'keyword.control.import.js',
    'keyword.control.from.js',
    'keyword.control.export.js',
    'keyword.control.default.js'
  ],
  settings: {
    foreground: colors.grayColors600
  }
}

const jsFromStringKeyword = {
  name: 'js::variable::import-content',
  scope: ['meta.import.js'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const jsImportVariables = {
  name: 'js::import-variables',
  scope: ['variable.other.readwrite.alias.js', 'variable.other.object.js'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const jsVariableOtherReadwriteAlias = {
  name: 'js::from::alias',
  scope: ['variable.other.readwrite.alias.js', 'variable.other.readwrite.js'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const jsDynamicImport = {
  name: 'js::variable.other.readwrite.alias.js',
  scope: ['keyword.operator.expression.import.js'],
  settings: {
    foreground: colors.magentaColors500
  }
}

export default [
  jsImportFromExportDefault,
  jsFromStringKeyword,
  jsImportVariables,
  jsVariableOtherReadwriteAlias,
  jsDynamicImport
]
