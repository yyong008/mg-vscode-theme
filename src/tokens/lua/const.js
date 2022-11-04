import colors from '../../designs/index.js'

const local = () => ({
  name: 'lua::local',
  scope: ['keyword.local.lua'],
  settings: {
    foreground: colors.volcanoColors700,
    fonluatyle: 'bold'
  }
})

export default [local]
