import colors from '../../designs/index.js'

const literalKeyScopes = {
  js: ['meta.object-literal.key.js'],
  jsx: ['meta.object-literal.key.jsx'],
  ts: ['meta.object-literal.key.ts'],
  tsx: ['meta.object-literal.key.tsx']
}

const jsObject = () => ({
  name: 'js::object::props',
  scope: [
    ...literalKeyScopes.js,
    ...literalKeyScopes.ts,
    ...literalKeyScopes.jsx,
    ...literalKeyScopes.tsx
  ],
  settings: {
    foreground: colors.grayColors600
  }
})

export default [jsObject]
