import colors from '../../designs/index.js'

const tomlCommentScope = () => ({
  name: 'toml::comment',
  scope: [
    'string.quoted.single.basic.line.toml',
    'string.quoted.double.basic.line.toml'
  ],
  settings: {
    foreground: colors.grayColors200,
    fontStyle: 'italic'
  }
})

export default [tomlCommentScope]
