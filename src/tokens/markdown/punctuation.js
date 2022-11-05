import colors from '../../designs/index.js'

const mdPunctuation = () => ({
  name: 'md::punctuation',
  scope: [
    'punctuation.definition.link.title.begin.markdown',
    'punctuation.definition.link.title.end.markdown',
    'punctuation.definition.metadata.markdown',
    'punctuation.definition.metadata.markdown'
  ],
  settings: {
    fontStyle: 'blod',
    foreground: colors.yellowColors600
  }
})

export default [mdPunctuation]
