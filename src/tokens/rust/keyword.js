import { mapColors, getRuntimeColors } from '../../designs/index.js'

const keyWordScope = ['storage.type.rust']

const keyWord = () => ({
  name: 'rust::keyword',
  scope: [...keyWordScope],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}600`)}`,
    fontStyle: 'bold'
  }
})

export default [keyWord]
