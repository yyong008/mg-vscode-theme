import colors from '../../designs/index.js'

const quotedScopes = {
  js: ['string.quoted.single.js', 'string.quoted.double.js'],
  ts: ['string.quoted.single.ts', 'string.quoted.double.ts'],
  jsx: ['string.quoted.single.jsx', 'string.quoted.double.jsx'],
  tsx: ['string.quoted.single.tsx', 'string.quoted.double.tsx']
}

const jsString = () => ({
  name: 'js::string',
  scope: [
    ...quotedScopes.js,
    ...quotedScopes.jsx,
    ...quotedScopes.ts,
    ...quotedScopes.tsx
  ],
  settings: {
    foreground: colors.grayColors600
  }
})

export default [jsString]
