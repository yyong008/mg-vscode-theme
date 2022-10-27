import colors from '../../designs/index.js'

const asyncAwait = {
  name: 'tsx/jsx::async-await',
  scope: [
    'storage.modifier.async.tsx',
    'keyword.control.flow.tsx',
    'storage.modifier.async.jsx',
    'keyword.control.flow.jsx'
  ],
  settings: {
    foreground: colors.grayColors100
  }
}

export default [asyncAwait]
