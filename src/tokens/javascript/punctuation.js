import colors from '../../designs/index.js'

const punctuation = {
  name: 'js/ts::punctuation',
  scope: [
    'punctuation.definition.string.template.begin.js',
    'punctuation.definition.string.template.end.js',
    'punctuation.definition.string.template.begin.ts',
    'punctuation.definition.string.template.end.ts'
  ],
  settings: {
    foreground: colors.redColors600,
    fontStyle: 'italic bold'
  }
}

export default [punctuation]
