import colors from '../../designs/index.js'

const htmlTag = {
  name: 'html::tag',
  scope: ['entity.name.tag.html', 'support.class.component.astro'],
  settings: {
    foreground: colors.cyanColors400,
    fontStyle: 'bold'
  }
}

const tagProps = {
  name: 'html::tagProps',
  scope: ['entity.other.attribute-name.html', 'string.quoted.double.html'],
  settings: {
    foreground: colors.cyanColors300
  }
}

const attrSeparator = {
  name: 'html::attrSeparator',
  scope: ['punctuation.separator.key-value.html'],
  settings: {
    foreground: colors.magentaColors400
  }
}

const tagContent = {
  name: 'html::derivative',
  scope: ['text.html.derivative'],
  settings: {
    foreground: colors.goldColors100
  }
}

const spunctuation = {
  name: 'html::definition::tag',
  scope: [
    'punctuation.definition.tag.begin.html',
    'punctuation.definition.tag.end.html'
  ],
  settings: {
    foreground: colors.cyanColors800
  }
}

const attr = {
  name: 'html::quoted',
  scope: ['string.quoted.double.html'],
  settings: {
    foreground: colors.goldColors400
  }
}

export default [
  htmlTag,
  tagProps,
  attrSeparator,
  tagContent,
  spunctuation,
  attr
]
