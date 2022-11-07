import colors from '../../designs/index.js'

const comment = () => ({
  name: 'editorconfig::comment',
  scope: [
    'comment.line.number-sign.editorconfig'
  ],
  settings: {
    foreground: colors.grayColors800
  }
})

export default [comment]
