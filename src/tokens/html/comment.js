import { mapColors } from '../../designs/index.js'

const comments = {
  punctuation: ['punctuation.definition.comment.html'],
  block: ['comment.block.html']
}

const htmlCommentScope = () => ({
  name: 'html::comment',
  scope: [...comments.block, ...comments.punctuation],
  settings: {
    foreground: mapColors('grayColors800'),
    fontStyle: 'italic'
  }
})

export default [htmlCommentScope]
