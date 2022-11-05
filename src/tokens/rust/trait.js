import colors from '../../designs/index.js'

const trait = () => ({
  name: 'rust::trait',
  scope: ['entity.name.function.rust'],
  settings: {
    foreground: colors.grayColors400,
    fontStyle: 'bold'
  }
})

export default [trait]
