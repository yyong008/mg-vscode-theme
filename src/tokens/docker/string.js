import colors from '../../designs/index.js'

const quotedScopes = {
  docker: ['string.quoted.single.dockerfile', 'string.quoted.double.dockerfile']
}

const dockerString = () => ({
  name: 'js::string',
  scope: [...quotedScopes.docker],
  settings: {
    foreground: colors.grayColors600
  }
})

export default [dockerString]
