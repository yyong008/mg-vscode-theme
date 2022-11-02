import colors from '../../designs/index.js'

const scope = {
  css: ['comment.block.css'],
  less: ['comment.block.less', 'comment.line.double-slash.less'],
  scss: ['comment.block.scss', 'comment.line.double-slash.scss'],
  stylus: ['comment.block.styl', 'comment.line.double-slash.styl'],
  punctuation: ['punctuation.definition.comment']
}

const styleComment = () => ({
  name: 'style::comment',
  scope: [...scope.css, ...scope.less, ...scope.scss, ...scope.punctuation],
  settings: {
    foreground: colors.grayColors800
  }
})

export default [styleComment]
