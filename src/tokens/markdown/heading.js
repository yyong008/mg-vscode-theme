import colors, { mapColors, getRuntimeColors } from '../../designs/index.js'

const markdownHead = () => ({
  name: 'md::head',
  scope: ['markup.heading.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: `${mapColors(`${getRuntimeColors()}900`)}`
  }
})

const markdownHead1 = () => ({
  name: 'md::head1',
  scope: ['heading.1.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: `${mapColors(`${getRuntimeColors()}800`)}`
  }
})

const markdownHead2 = () => ({
  name: 'md::head2',
  scope: ['heading.2.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: `${mapColors(`${getRuntimeColors()}700`)}`
  }
})

const markdownHead3 = () => ({
  name: 'md::head3',
  scope: ['heading.3.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: `${mapColors(`${getRuntimeColors()}600`)}`
  }
})

const markdownHead4 = () => ({
  name: 'md::head4',
  scope: ['heading.4.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: `${mapColors(`${getRuntimeColors()}500`)}`
  }
})

const markdownHead5 = () => ({
  name: 'md::head5',
  scope: ['heading.5.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: `${mapColors(`${getRuntimeColors()}400`)}`
  }
})

const markdownHead6 = () => ({
  name: 'md::head6',
  scope: ['heading.6.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`
  }
})

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

const mdLink = () => ({
  name: 'md::link',
  scope: ['string.other.link.title.markdown', 'markup.underline.link.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: colors.greenColors400
  }
})

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

const mdBold = () => ({
  name: 'md:bold',
  scope: ['markup.bold.markdown', 'punctuation.definition.bold.markdown'],
  settings: {
    foreground: colors.limeColors500
  }
})

export default [
  markdownHead,
  markdownHead1,
  markdownHead2,
  markdownHead3,
  markdownHead4,
  markdownHead5,
  markdownHead6,
  mdListOrder,
  mdListUnOrder,
  mdLink,
  mdPunctuation,
  mdBold
]
