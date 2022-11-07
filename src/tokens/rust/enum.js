import { mapColors, getRuntimeColors } from '../../designs/index.js'

const $enum = () => ({
  name: 'rust::comment',
  scope: ['punctuation.definition.attribute.rust', 'meta.attribute.rust'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`,
    fontStyle: 'italic'
  }
})

export default [$enum]
