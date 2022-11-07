import { mapColors, getRuntimeColors } from '../../designs/index.js'

const macro = () => ({
  name: 'rust::macro',
  scope: ['entity.name.function.macro.rust'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}700`)}`,
    fontStyle: 'bold'
  }
})

export default [macro]
