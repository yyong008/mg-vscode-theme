import colors, { mapColors, getRuntimeColors } from '../../designs/index.js'

const asyncAwaitScopes = {
  js: ['storage.modifier.async.js', 'keyword.control.flow.js'],
  jsx: ['storage.modifier.async.jsx', 'keyword.control.flow.jsx'],
  ts: ['storage.modifier.async.ts', 'keyword.control.flow.ts'],
  tsx: ['storage.modifier.async.tsx', 'keyword.control.flow.tsx']
}

const asyncAwait = () => ({
  name: 'js::async-await',
  scope: [
    ...asyncAwaitScopes.js,
    ...asyncAwaitScopes.jsx,
    ...asyncAwaitScopes.ts,
    ...asyncAwaitScopes.tsx
  ],
  settings: {
    foreground: colors.grayColors100
  }
})

export default [asyncAwait]
