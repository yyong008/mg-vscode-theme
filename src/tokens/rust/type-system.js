import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const typeSystem = () => ({
  name: 'rust::typeSystem',
  scope: [
    'entity.name.type.rust',
    'punctuation.brackets.angle.rust',
    'storage.type.rust'
  ],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`,
    fontStyle: 'bold'
  }
})

export default [typeSystem]
