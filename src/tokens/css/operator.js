import colors from '../../designs/index.js'

const operator = {
  name: 'style::operator',
  scope: [
    'keyword.operator.less',
    'keyword.operator.css',
    'keyword.operator.combinator.css',
    'keyword.operator.combinator.less',
    'keyword.other.important.css',
    'keyword.other.important.lcss'
  ],
  settings: {
    foreground: colors.redColors800,
    fontStyle: 'italic bold'
  }
}

export default [operator]
