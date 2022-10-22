import colors from '../../designs/index.js'

const styleComment = {
  name: 'style::operator',
  scope: [
    'comment.block.css',
    'comment.line.double-slash.css',
    'comment.line.double-slash.less',
    'comment.block.documentation.css',
    'meta.property-list.css',
    'meta.property-list.less',
    'source.css.less',
    'punctuation.definition.comment'
  ],
  settings: {
    foreground: colors.grayColors800,
    fontStyle: 'italic'
  }
}

export default [styleComment]
