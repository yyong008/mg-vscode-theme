import colors from '../../designs/index.js'

const markdownHead = {
  name: 'md::head',
  scope: ['markup.heading.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: colors.blueColors600
  }
}

const markdownHead1 = {
  name: 'md::head1',
  scope: ['	heading.1.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: colors.volcanoColors500
  }
}

const mdListOrder = {
  name: 'md::list::number',
  scope: ['markup.list.numbered.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: colors.volcanoColors500
  }
}

const mdListUnOrder = {
  name: 'md::list::unorder',
  scope: ['markup.list.unnumbered.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: colors.goldColors400
  }
}

const mdLink = {
  name: 'md::link',
  scope: ['string.other.link.title.markdown', 'markup.underline.link.markdown'],
  settings: {
    fontStyle: 'blod',
    foreground: colors.greenColors400
  }
}

const mdPunctuation = {
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
}

const mdBold = {
  name: 'md:bold',
  scope: ['markup.bold.markdown', 'punctuation.definition.bold.markdown'],
  settings: {
    fontStyle: 'bold italic',
    foreground: colors.limeColors500
  }
}

export default [
  markdownHead,
  markdownHead1,
  mdListOrder,
  mdListUnOrder,
  mdLink,
  mdPunctuation,
  mdBold
]
