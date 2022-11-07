import colors from '../../designs/index.js'

const comment = () => ({
  name: 'editorconfig::comment',
  scope: [
    'punctuation.definition.comment.shebang.shell',
    'comment.line.number-sign.shebang.shell',
    'keyword.operator.heredoc.shell',
    'keyword.control.heredoc-token.shell',
    'string.unquoted.heredoc.expanded.shell'
  ],
  settings: {
    foreground: colors.grayColors800
  }
})

export default [comment]
