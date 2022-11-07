import colors from '../../designs/index.js'

const string = () => ({
  name: 'rust::variables',
  scope: ['string.quoted.double.shell', 'string.quoted.single.shell'],
  settings: {
    foreground: colors.grayColors100,
    fontStyle: 'italic'
  }
})

export default [string]
