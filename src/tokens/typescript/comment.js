import colors from '../../designs/index.js'

const tsComment = {
  name: 'ts::comment',
  scope: [
    'comment.block.documentation.ts',
    'comment.line.double-slash.ts',
    'punctuation.definition.comment',
    'comment.block.ts',
    'comment.line.shebang.ts'
  ],
  settings: {
    fontStyle: 'italic',
    foreground: colors.grayColors800
  }
}

export default [tsComment]
