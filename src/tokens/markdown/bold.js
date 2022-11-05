import colors from '../../designs/index.js'

const mdBold = () => ({
  name: 'md:bold',
  scope: ['markup.bold.markdown', 'punctuation.definition.bold.markdown'],
  settings: {
    foreground: colors.limeColors500
  }
})

export default [mdBold]
