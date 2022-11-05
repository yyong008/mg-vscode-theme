// impl struct
import { mapColors, getRuntimeColors } from '../../designs/index.js'

const struct = () => ({
  name: 'rust::impl',
  scope: [
    // impl
    'keyword.other.rust'
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}500`)}`,
    fontStyle: 'bold'
  }
})

export default [struct]
