import colors from '../../designs/index.js'

const asyncAwait = {
  name: 'ts::async-await',
  scope: ['storage.modifier.async.ts', 'keyword.control.flow.ts'],
  settings: {
    foreground: colors.brandColors800,
    fontStyle: 'bold italic'
  }
}

export default [asyncAwait]
