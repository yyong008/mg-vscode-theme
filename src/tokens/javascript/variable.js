import colors from '../../designs/index.js'

const jsVariable = {
  name: 'js::variable',
  scope: ['variable.other.constant.js'],
  settings: {
    foreground: colors.greenColors500,
    fontStyle: 'bold'
  }
}

const jsRuntimeGlobalVariable = {
  name: 'js::global::variable',
  scope: ['variable.other.constant.object.js'],
  settings: {
    foreground: colors.blueColors500
  }
}

const jsNewTarget = {
  name: 'js::new::variable',
  scope: ['support.variable.property.target.js'],
  settings: {
    foreground: colors.blueColors500
  }
}
export default [jsVariable, jsRuntimeGlobalVariable, jsNewTarget]
