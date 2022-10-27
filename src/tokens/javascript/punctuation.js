import colors from '../../designs/index.js'

const punctuation = {
  name: 'js/ts::punctuation',
  scope: [
    'punctuation.definition.comment.js',
    'punctuation.definition.comment.ts',
    'punctuation.definition.string.template.begin.js',
    'punctuation.definition.string.template.end.js',
    'punctuation.definition.string.template.begin.ts',
    'punctuation.definition.string.template.end.ts'
  ],
  settings: {
    foreground: colors.magentaColors500,
    fontStyle: 'italic bold'
  }
}

const punctuationComment = {
  name: 'js/ts::punctuation',
  scope: ['punctuation.definition.comment.js'],
  settings: {
    foreground: colors.grayColors800,
    fontStyle: 'italic bold'
  }
}

export default [punctuation, punctuationComment]
