import colors from '../../designs/index.js'

const luaTemplate = () => ({
  name: 'lua::template',
  scope: ['string.template.lua'],
  settings: {
    foreground: colors.brandColors600
  }
})

export default [luaTemplate]
