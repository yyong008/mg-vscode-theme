import colors from '../../designs/index.js'

const labelScopes = {
  js: ['entity.name.label.js'],
  ts: ['entity.name.label.ts'],
  jsx: ['entity.name.label.jsx'],
  tsx: ['entity.name.label.tsx']
}

const jsLabel = () => ({
  name: 'js::label',
  scope: [
    ...labelScopes.js,
    ...labelScopes.ts,
    ...labelScopes.jsx,
    ...labelScopes.tsx
  ],
  settings: {
    foreground: colors.purpleColors400
  }
})

export default [jsLabel]
