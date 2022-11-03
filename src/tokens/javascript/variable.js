import colors from '../../designs/index.js'

const constantScopes = {
  js: ['variable.other.constant.js'],
  jsx: ['variable.other.constant.jsx'],
  ts: ['variable.other.constant.ts'],
  tsx: ['variable.other.constant.tsx']
}

const constantObjectScopes = {
  js: ['variable.other.constant.object.js'],
  jsx: ['variable.other.constant.object.jsx'],
  ts: ['variable.other.constant.object.ts'],
  tsx: ['variable.other.constant.object.tsx']
}

const propertyTarget = {
  js: ['support.variable.property.target.js'],
  ts: ['support.variable.property.target.ts'],
  jsx: ['support.variable.property.target.jsx'],
  tsx: ['support.variable.property.target.tsx']
}

const jsVariable = () => ({
  name: 'js::variable',
  scope: [
    ...constantScopes.js,
    ...constantScopes.jsx,
    ...constantScopes.ts,
    ...constantScopes.tsx
  ],
  settings: {
    foreground: colors.cyanColors600
  }
})

const jsRuntimeGlobalVariable = () => ({
  name: 'js::global::variable',
  scope: [
    ...constantObjectScopes.js,
    ...constantObjectScopes.jsx,
    ...constantObjectScopes.ts,
    ...constantObjectScopes.tsx
  ],
  settings: {
    foreground: colors.blueColors500
  }
})

const jsNewTarget = () => ({
  name: 'js::new::variable',
  scope: [
    ...propertyTarget.js,
    ...propertyTarget.ts,
    ...propertyTarget.jsx,
    ...propertyTarget.tsx
  ],
  settings: {
    foreground: colors.blueColors500
  }
})

export default [jsVariable, jsRuntimeGlobalVariable, jsNewTarget]
