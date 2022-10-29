import colors from '../../designs/index.js'

const tsxString = {
  name: 'tsx::string',
  scope: [
    // single
    'string.quoted.single.tsx',
    'string.quoted.single.jsx',
    // double
    'string.quoted.double.tsx',
    'string.quoted.double.jsx'
  ],
  settings: {
    foreground: colors.grayColors600
  }
}

export default [tsxString]
