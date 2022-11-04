import colors from '../../designs/index.js'

const jsonComment = () => ({
  name: 'json::comment',
  scope: ['support.type.property-name.json.comments'],
  settings: {
    foreground: colors.grayColors800
  }
})

export default [jsonComment]
