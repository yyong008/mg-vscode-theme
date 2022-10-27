import colors from '../../designs/index.js'

const tsxVariable = {
  name: 'tsx::variable',
  scope: ['variable.other.constant.tsx'],
  settings: {
    foreground: colors.greenColors500,
    fontStyle: 'bold'
  }
}

const tsxRuntimeGlobalVariable = {
  name: 'tsx::global::variable',
  scope: ['variable.other.constant.object.tsx'],
  settings: {
    foreground: colors.blueColors500
  }
}

const tsxNewTarget = {
  name: 'tsx::variable',
  scope: ['support.variable.property.target.tsx'],
  settings: {
    foreground: colors.blueColors500
  }
}

const tsxTrue = {
  name: 'tsx::true',
  scope: ['constant.language.boolean.true.tsx'],
  settings: {
    foreground: colors.greenColors500
  }
}

const tsxFalse = {
  name: 'tsx::false',
  scope: ['constant.language.boolean.false.tsx'],
  settings: {
    foreground: colors.redColors500
  }
}

const tsxUndefined = {
  name: 'tsx::undefined',
  scope: ['constant.language.undefined.tsx'],
  settings: {
    foreground: colors.purpleColors500
  }
}

const tsxNumber = {
  name: 'tsx::numeric',
  scope: ['constant.numeric.decimal.tsx'],
  settings: {
    foreground: colors.blueColors500,
    fontStyle: 'bold underline'
  }
}

const tsxNull = {
  name: 'tsx::null',
  scope: ['constant.language.null.tsx'],
  settings: {
    foreground: colors.magentaColors500,
    fontStyle: 'bold underline'
  }
}

export default [
  tsxVariable,
  tsxRuntimeGlobalVariable,
  tsxNewTarget,
  tsxTrue,
  tsxFalse,
  tsxUndefined,
  tsxNumber,
  tsxNull
]
