import { getRuntimeColors, mapColors } from '../../designs/index.js'

const attrScopes = {
  attribute: ['entity.other.attribute-name.html'],
  class: ['meta.attribute.class.html'],
  id: ['meta.attribute.id.html'],
  quoted: ['string.quoted.double.html', 'string.quoted.single.html'],
  derivative: ['text.html.derivative'],
  punctuation: ['punctuation.separator.key-value.html']
}

const attributeScope = () => ({
  name: 'attr::attribute',
  scope: attrScopes.attribute,
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}400`)}`
  }
})

const classScope = () => ({
  name: 'attr::class',
  scope: attrScopes.class,
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`
  }
})

const idScope = () => ({
  name: 'attr::id',
  scope: attrScopes.id,
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`,
    fontStyle: 'bold'
  }
})

const quotedScope = () => ({
  name: 'attr::quoted',
  scope: attrScopes.quoted,
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`
  }
})

const derivativeScope = () => ({
  name: 'attr::derivative',
  scope: attrScopes.derivative,
  settings: {
    foreground: mapColors('grayColors100')
  }
})

const punctuationSeparatorScope = () => ({
  name: 'attr::punctuation::separatorScope',
  scope: attrScopes.punctuation,
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}900`)}`
  }
})

export default [
  attributeScope,
  classScope,
  idScope,
  quotedScope,
  derivativeScope,
  punctuationSeparatorScope
]
