import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const variables = () => ({
  name: 'rust::variables',
  scope: [
    // keyword::use
    // 'keyword.other.rust',
    'meta.use.rust'
    //
  ],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`,
    fontStyle: 'bold'
  }
})

export default [variables]
