import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const control = () => ({
  name: 'rust::variables',
  scope: ['keyword.control.rust'],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`
  }
})

export default [control]
