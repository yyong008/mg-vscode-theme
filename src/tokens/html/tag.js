import { getRuntimeColors, mapColors } from '../../designs/index.js'

const tag = {
  punctuation: [
    'punctuation.definition.tag.begin.html',
    'punctuation.definition.tag.end.html'
  ],
  tagName: ['entity.name.tag.html']
}

const htmlTag = () => ({
  name: 'html::tag',
  scope: [...tag.tagName],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}700`)}`,
    fontStyle: 'bold italic'
  }
})

const tagProps = () => ({
  name: 'html::tagProps',
  scope: ['entity.other.attribute-name.html', 'string.quoted.double.html'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`
  }
})

const attrSeparator = () => ({
  name: 'html::attrSeparator',
  scope: ['punctuation.separator.key-value.html'],
  settings: {
    foreground: mapColors('magentaColors400')
  }
})

const tagContent = () => ({
  name: 'html::derivative',
  scope: ['text.html.derivative'],
  settings: {
    foreground: mapColors('goldColors100')
  }
})

const spunctuation = () => ({
  name: 'html::punctuation',
  scope: [...tag.punctuation],
  settings: {
    // foreground: `${mapColors(`${getRuntimeColors()}600`)}`,
    foreground: `${mapColors('grayColors700')}`,
    fontStyle: 'bold italic'
  }
})

const attr = () => ({
  name: 'html::quoted',
  scope: ['string.quoted.double.html'],
  settings: {
    foreground: mapColors('goldColors400')
  }
})

export default [
  htmlTag,
  tagProps,
  attrSeparator,
  tagContent,
  spunctuation,
  attr
]
