import colors from '../../designs/index.js'

const tsxComment = {
  name: 'tsx::comment',
  scope: [
    'comment.block.documentation.tsx',
    'comment.line.double-slash.tsx',
    'punctuation.definition.comment',
    'comment.block.tsx',
    'comment.line.shebang.tsx'
  ],
  settings: {
    fontStyle: 'italic',
    foreground: colors.grayColors800
  }
}

export default [tsxComment]
