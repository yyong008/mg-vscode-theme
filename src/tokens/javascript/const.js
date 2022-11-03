import colors from '../../designs/index.js'

const constantScopes = {
  js: ['storage.type.js'],
  ts: ['storage.type.ts'],
  jsx: ['storage.type.jsx'],
  tsx: ['storage.type.tsx']
}

const cnst = () => ({
  name: 'js::const',
  scope: [
    ...constantScopes.js,
    ...constantScopes.ts,
    ...constantScopes.jsx,
    ...constantScopes.tsx
  ],
  settings: {
    foreground: colors.grayColors100
  }
})

export default [cnst]
