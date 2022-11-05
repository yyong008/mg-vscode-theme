import colors from '../../designs/index.js'

const string = () => ({
  name: 'rust::variables',
  scope: [
    'string.quoted.double.rust',
    'string.quoted.signle.rust',
    'string.quoted.single.char.rust'
  ],
  settings: {
    foreground: colors.grayColors100,
    fontStyle: 'italic'
  }
})

export default [string]
