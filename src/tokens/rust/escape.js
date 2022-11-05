import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const rustEscape = () => ({
  name: 'js::escape',
  scope: [
    'constant.character.escape.backslash.rust',
    'constant.character.escape.rust'
  ],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`
  }
})

export default [rustEscape]
