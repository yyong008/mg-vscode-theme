import colors from '../../designs/index.js'

const styleValue = {
  name: 'style::props',
  scope: ['support.constant.property-value.css', 'variable.other.less'],
  settings: {
    foreground: colors.goldColors400,
    fontStyle: 'normal'
  }
}

const styleConstantsValue = {
  name: 'style::props',
  scope: ['constant.numeric.css'],
  settings: {
    foreground: colors.limeColors600,
    fontStyle: 'italic'
  }
}

const styleCssVariables = {
  name: 'style::props',
  scope: ['support.function.misc.css', 'variable.argument.css'],
  settings: {
    foreground: colors.volcanoColors500,
    fontStyle: 'italic'
  }
}

const styleHover = {
  name: 'style::props',
  scope: [
    'entity.other.attribute-name.pseudo-class.css',
    'entity.other.attribute-name.parent-selector.css',
    'support.function.timing-function.css',
    'meta.property-value.css'
  ],
  settings: {
    foreground: colors.volcanoColors500,
    fontStyle: 'italic'
  }
}

const stylePseudo = {
  name: 'style::props::pseudo',
  scope: ['entity.other.attribute-name.pseudo-element.css'],
  settings: {
    foreground: colors.volcanoColors500,
    fontStyle: 'italic'
  }
}

export default [
  styleValue,
  styleConstantsValue,
  styleCssVariables,
  styleHover,
  stylePseudo
]
