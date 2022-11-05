import colors from '../../designs/index.js'

const markdownComments = () => ({
  name: 'md::head',
  scope: [
    'punctuation.definition.comment.shell',
    'comment.line.number-sign.shell'
  ],
  settings: {
    foreground: colors.grayColors800
  }
})

export default [markdownComments]
