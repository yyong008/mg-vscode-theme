import { mapColors, getRuntimeColors } from '../../designs/index.js'

const fnKeyword = () => ({
  name: 'rust::fn::keyword',
  scope: ['keyword.other.fn.rust'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}500`)}`,
    fontStyle: 'bold italic'
  }
})

const fnName = () => ({
  name: 'rust::fn::keyword',
  scope: ['entity.name.function.rust'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}200`)}`,
    fontStyle: 'bold'
  }
})

export default [fnKeyword, fnName]
