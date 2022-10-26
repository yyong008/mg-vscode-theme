import colors from '../../designs/index.js'

const markdownComments = {
  name: 'md::head',
  scope: [
    'punctuation.definition.comment.shell',
    'comment.line.number-sign.shell'
  ],
  settings: {
    fontStyle: 'blod italic',
    foreground: colors.purpleColors400
  }
}

export default [markdownComments]
