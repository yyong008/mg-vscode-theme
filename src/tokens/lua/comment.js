import colors from '../../designs/index.js'

const luaComment = {
  name: 'lua::comment',
  scope: [
    'punctuation.definition.comment.lua',
    'comment.line.double-dash.lua',
    'comment.block.lua'
  ],
  settings: {
    fonluatyle: 'italic',
    foreground: colors.grayColors800
  }
}

export default [luaComment]
