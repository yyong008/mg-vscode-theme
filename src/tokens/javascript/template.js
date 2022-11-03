import colors from '../../designs/index.js'

const templateScopes = {
  js: ['string.template.js'],
  ts: ['string.template.ts'],
  jsx: ['string.template.jsx'],
  tsx: ['string.template.tsx']
}

const jsTemplate = () => ({
  name: 'js::template',
  scope: [
    ...templateScopes.js,
    ...templateScopes.jsx,
    ...templateScopes.ts,
    ...templateScopes.tsx
  ],
  settings: {
    foreground: colors.grayColors200
  }
})

export default [jsTemplate]
