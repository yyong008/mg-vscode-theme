import colors from '../../designs/index.js'

const luaString = {
  name: 'lua::string',
  scope: [
    'string.quoted.single.lua',
    'string.quoted.other.multiline.lua',
    'string.quoted.double.lua'
  ],
  settings: {
    foreground: colors.greenColors300,
    fonluatyle: 'italic'
  }
}

export default [luaString]
