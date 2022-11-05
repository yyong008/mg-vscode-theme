import { mapColors } from '../../designs/index.js'

const comments = {
  punctuation: ['punctuation.definition.comment.toml'],
  line: ['comment.line.number-sign.toml']
}

const tomlCommentScope = () => ({
  name: 'toml::comment',
  scope: [...comments.line, ...comments.punctuation],
  settings: {
    foreground: mapColors('grayColors800'),
    fontStyle: 'italic'
  }
})

export default [tomlCommentScope]
