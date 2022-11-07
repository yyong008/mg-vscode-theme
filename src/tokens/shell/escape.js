import colors from '../../designs/index.js'

const shellEscape = () => ({
  name: 'js::escape',
  scope: ['constant.character.escape.shell'],
  settings: {
    foreground: colors.cyanColors600
  }
})

export default [shellEscape]
