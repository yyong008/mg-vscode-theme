import colors from '../../designs/index.js'

const luaObject = () => ({
  name: 'lua::object::props',
  scope: ['meta.object-literal.key.lua'],
  settings: {
    foreground: colors.orangeColors300
  }
})

export default [luaObject]
