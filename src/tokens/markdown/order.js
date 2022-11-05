import colors from '../../designs/index.js'

const mdListOrder = () => ({
  name: 'md::list::number',
  scope: ['markup.list.numbered.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: colors.volcanoColors500
  }
})

const mdListUnOrder = () => ({
  name: 'md::list::unorder',
  scope: ['markup.list.unnumbered.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: colors.goldColors400
  }
})

export default [mdListOrder, mdListUnOrder]
