import colors from '../../designs/index.js'

const jsComment = {
  name: 'js::comment',
  scope: [
    'comment.block.documentation.js',
    'comment.line.double-slash.js',
    'punctuation.definition.comment',
    'comment.block.js',
    'comment.line.shebang.js'
  ],
  settings: {
    fontStyle: 'bold italic',
    foreground: colors.grayColors800
  }
}

export default [jsComment]
