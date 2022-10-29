import colors from '../../designs/index.js'

const tsxVariable = {
  name: 'tsx::variable',
  scope: ['variable.other.constant.tsx', 'variable.other.constant.jsx'],
  settings: {
    foreground: colors.cyanColors600
  }
}

const tsxRuntimeGlobalVariable = {
  name: 'tsx::global::variable',
  scope: [
    'variable.other.constant.object.tsx',
    'variable.other.constant.object.jsx'
  ],
  settings: {
    foreground: colors.blueColors500
  }
}

const tsxNewTarget = {
  name: 'tsx::variable',
  scope: [
    'support.variable.property.target.tsx',
    'support.variable.property.target.jsx'
  ],
  settings: {
    foreground: colors.blueColors500
  }
}

const tsxTrue = {
  name: 'tsx::true',
  scope: [
    'constant.language.boolean.true.tsx',
    'constant.language.boolean.true.jsx'
  ],
  settings: {
    foreground: colors.greenColors500
  }
}

const tsxFalse = {
  name: 'tsx::false',
  scope: [
    'constant.language.boolean.false.tsx',
    'constant.language.boolean.false.jsx'
  ],
  settings: {
    foreground: colors.redColors500
  }
}

const tsxUndefined = {
  name: 'tsx::undefined',
  scope: ['constant.language.undefined.tsx', 'constant.language.undefined.jsx'],
  settings: {
    foreground: colors.purpleColors500
  }
}

const tsxNumber = {
  name: 'tsx::numeric',
  scope: ['constant.numeric.decimal.tsx', 'constant.numeric.decimal.jsx'],
  settings: {
    foreground: colors.blueColors500,
    fontStyle: 'bold underline'
  }
}

const tsxNull = {
  name: 'tsx::null',
  scope: ['constant.language.null.tsx', 'constant.language.null.tsx'],
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
