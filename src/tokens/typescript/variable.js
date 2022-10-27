import colors from '../../designs/index.js'

const tsVariable = {
  name: 'ts::variable',
  scope: ['variable.other.constant.ts'],
  settings: {
    foreground: colors.greenColors500,
    fontStyle: 'bold'
  }
}

const tsRuntimeGlobalVariable = {
  name: 'ts::variable',
  scope: ['variable.other.constant.object.ts'],
  settings: {
    foreground: colors.blueColors500
  }
}

const tsNewTarget = {
  name: 'ts::variable',
  scope: ['support.variable.property.target.ts'],
  settings: {
    foreground: colors.blueColors500
  }
}

const tsTrue = {
  name: 'ts::variable',
  scope: ['constant.language.boolean.true.ts'],
  settings: {
    foreground: colors.greenColors500
  }
}

const tsFalse = {
  name: 'ts::variable',
  scope: ['constant.language.boolean.false.ts'],
  settings: {
    foreground: colors.redColors500
  }
}

const tsUndefined = {
  name: 'ts::undefined',
  scope: ['constant.language.undefined.ts'],
  settings: {
    foreground: colors.purpleColors500
  }
}

const tsNumber = {
  name: 'ts::numeric',
  scope: ['constant.numeric.decimal.ts'],
  settings: {
    foreground: colors.blueColors500,
    fontStyle: 'bold underline'
  }
}

const tsNull = {
  name: 'ts::null',
  scope: ['constant.language.null.ts'],
  settings: {
    foreground: colors.magentaColors500,
    fontStyle: 'bold underline'
  }
}

export default [
  tsVariable,
  tsRuntimeGlobalVariable,
  tsNewTarget,
  tsTrue,
  tsFalse,
  tsUndefined,
  tsNumber,
  tsNull
]
