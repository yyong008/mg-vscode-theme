import colors from '../../designs/index.js'

const conditional = {
  js: ['keyword.control.conditional.js'],
  ts: ['keyword.control.conditional.js'],
  jsx: ['keyword.control.conditional.jsx'],
  tsx: ['keyword.control.conditional.tsx']
}

const jsDitional = () => ({
  name: 'js::conditional',
  scope: [
    ...conditional.js,
    ...conditional.jsx,
    ...conditional.ts,
    ...conditional.tsx
  ],
  settings: {
    foreground: colors.magentaColors600
  }
})

export default [jsDitional]
