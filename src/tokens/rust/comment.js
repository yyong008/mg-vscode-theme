import colors from '../../designs/index.js'

const comment = () => ({
  name: 'rust::comment',
  scope: [
    'comment.line.double-slash.rust',
    'comment.block.rust',
    'comment.line.documentation.rust',
    'comment.line.shebang.rust'
  ],
  settings: {
    foreground: colors.grayColors800
  }
})

export default [comment]
