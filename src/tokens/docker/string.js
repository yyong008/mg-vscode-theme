import colors from '../../designs/index.js'

const quotedScopes = {
  docker: ['string.quoted.single.dockerfile', 'string.quoted.double.dockerfile']
}

const dockerString = () => ({
  name: 'dockerfile::string',
  scope: [...quotedScopes.docker],
  settings: {
    foreground: colors.grayColors600,
    fontStyle: 'italic'
  }
})

export default [dockerString]
