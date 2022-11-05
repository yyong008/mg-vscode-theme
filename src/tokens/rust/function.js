import colors from '../../designs/index.js'

const fnKeyword = () => ({
  name: 'rust::fn::keyword',
  scope: ['keyword.other.fn.rust'],
  settings: {
    foreground: colors.grayColors100,
    fontStyle: 'italic'
  }
})

const fnName = () => ({
  name: 'rust::fn::keyword',
  scope: ['entity.name.function.rust'],
  settings: {
    foreground: colors.grayColors400,
    fontStyle: 'bold'
  }
})

export default [fnKeyword, fnName]
