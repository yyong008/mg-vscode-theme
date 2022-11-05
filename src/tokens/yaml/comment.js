import colors, { mapColors, getRuntimeColors } from '../../designs/index.js'

const commentYaml = () => ({
  name: 'yaml::comment',
  scope: [
    'comment.line.number-sign.yaml',
    'punctuation.definition.comment.yaml'
  ],
  settings: {
    foreground: colors.grayColors800,
    fontStyle: 'italic'
  }
})

export default [commentYaml]
