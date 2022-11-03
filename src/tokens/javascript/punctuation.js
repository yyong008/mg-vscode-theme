import colors from '../../designs/index.js'

const punctuationScopes = {
  js: [
    'punctuation.definition.comment.js',
    'punctuation.definition.string.template.begin.js',
    'punctuation.definition.string.template.end.js'
  ],
  ts: [
    'punctuation.definition.comment.ts',
    'punctuation.definition.string.template.begin.ts',
    'punctuation.definition.string.template.end.ts'
  ],
  jsx: [
    'punctuation.definition.comment.jsx',
    'punctuation.definition.string.template.begin.jsx',
    'punctuation.definition.string.template.end.jsx'
  ],
  tsx: [
    'punctuation.definition.comment.tsx',
    'punctuation.definition.string.template.begin.tsx',
    'punctuation.definition.string.template.end.tsx'
  ]
}

const commaScopes = {
  js: ['punctuation.separator.comma.js'],
  ts: ['punctuation.separator.comma.ts'],
  jsx: ['punctuation.separator.comma.jsx'],
  tsx: ['punctuation.separator.comma.tsx']
}

const punctuation = () => ({
  name: 'js/ts::punctuation',
  scope: [
    ...punctuationScopes.js,
    ...punctuationScopes.jsx,
    ...punctuationScopes.ts,
    ...punctuationScopes.tsx
  ],
  settings: {
    foreground: colors.magentaColors500
  }
})

const punctuationComma = () => ({
  name: 'js/ts::punctuation',
  scope: [
    ...commaScopes.js,
    ...commaScopes.jsx,
    ...commaScopes.ts,
    ...commaScopes.tsx
  ],
  settings: {
    foreground: colors.grayColors100
  }
})

export default [punctuation, punctuationComma]
