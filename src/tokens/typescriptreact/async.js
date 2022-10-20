import colors from '../../designs/index.js'

const asyncAwait = {
  name: 'tsx::async-await',
  scope: ['storage.modifier.async.tsx', 'keyword.control.flow.tsx'],
  settings: {
    foreground: colors.brandColors800,
    fontStyle: 'bold italic'
  }
}

export default [asyncAwait]
