import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const builtin = () => ({
  name: 'shell::punctuation',
  scope: ['support.function.builtin.shell'],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`,
    fontStyle: 'bold'
  }
})

export default [builtin]
