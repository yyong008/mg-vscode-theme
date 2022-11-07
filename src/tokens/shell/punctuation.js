import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const punctuation = () => ({
  name: 'shell::punctuation',
  scope: [
    'punctuation.definition.string.begin.shell',
    'punctuation.definition.string.end.shell',
    'string.interpolated.backtick.shell'
  ],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`
  }
})

export default [punctuation]
