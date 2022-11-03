import colors from '../../designs/index.js'

const escapeScopes = {
  js: ['constant.character.escape.js'],
  jsx: ['constant.character.escape.jsx'],
  ts: ['constant.character.escape.ts'],
  tsx: ['constant.character.escape.tsx']
}
const jsEscape = () => ({
  name: 'js::escape',
  scope: [
    ...escapeScopes.js,
    ...escapeScopes.ts,
    ...escapeScopes.jsx,
    ...escapeScopes.tsx
  ],
  settings: {
    foreground: colors.cyanColors600
  }
})

export default [jsEscape]
