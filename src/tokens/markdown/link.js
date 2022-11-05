import colors from '../../designs/index.js'

const mdLink = () => ({
  name: 'md::link',
  scope: ['string.other.link.title.markdown', 'markup.underline.link.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: colors.greenColors400
  }
})

export default [mdLink]
