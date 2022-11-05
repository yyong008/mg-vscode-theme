import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const tomlCommentScope = () => ({
  name: 'toml::comment',
  scope: ['support.type.property-name.table.toml'],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`,
    fontStyle: 'bold'
  }
})

export default [tomlCommentScope]
