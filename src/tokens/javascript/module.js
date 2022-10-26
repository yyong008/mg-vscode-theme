import colors from '../../designs/index.js'

const jsImportFrom = {
  name: 'js:import/from',
  scope: [
    'keyword.control.import.js',
    'keyword.control.from.js',
    'keyword.control.export.js'
  ],
  settings: {
    foreground: colors.grayColors400
  }
}

const jsFromStringKeyword = {
  name: 'js::from-content',
  scope: ['meta.import.js'],
  settings: {
    foreground: colors.cyanColors400
  }
}

const jsDefaultStringKeyword = {
  name: 'js::default-string',
  scope: ['keyword.control.default.js'],
  settings: {
    foreground: colors.cyanColors400,
    fontStyle: 'bold'
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
  jsImportFrom,
  jsFromStringKeyword,
  jsDefaultStringKeyword,
  jsImportVariables,
  jsVariableOtherReadwriteAlias,
  jsDynamicImport
]
