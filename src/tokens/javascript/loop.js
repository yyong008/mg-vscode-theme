import colors from '../../designs/index.js'

const loopScopes = {
  js: ['keyword.control.loop.js'],
  ts: ['keyword.control.loop.ts'],
  jsx: ['keyword.control.loop.jsx'],
  tsx: ['keyword.control.loop.tsx']
}

const expressionOf = {
  js: ['keyword.operator.expression.of.js'],
  ts: ['keyword.operator.expression.of.ts'],
  jsx: ['keyword.operator.expression.of.jsx'],
  tsx: ['keyword.operator.expression.of.tsx']
}

const jsLoop = () => ({
  name: 'js::loop',
  scope: [
    ...loopScopes.js,
    ...loopScopes.ts,
    ...loopScopes.jsx,
    ...loopScopes.tsx,
    //
    ...expressionOf.js,
    ...expressionOf.jsx,
    ...expressionOf.ts,
    ...expressionOf.tsx
  ],
  settings: {
    foreground: colors.purpleColors400
  }
})

export default [jsLoop]
