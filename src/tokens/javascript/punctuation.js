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
    foreground: colors.magentaColors500
  }
}

const punctuationComment = {
  name: 'js/ts::punctuation',
  scope: ['punctuation.definition.comment.js'],
  settings: {
    foreground: colors.grayColors800
  }
}

const punctuationComma = {
  name: 'js/ts::punctuation',
  scope: ['punctuation.separator.comma.js'],
  settings: {
    foreground: colors.grayColors100
  }
}
export default [punctuation, punctuationComment, punctuationComma]
