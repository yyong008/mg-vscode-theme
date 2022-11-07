import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const modifier = () => ({
  name: 'shell::modifier',
  scope: ['storage.modifier.shell'],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}600`)}`
  }
})

export default [modifier]
