import { mapColors, getRuntimeColors } from '../../designs/index.js'

const propsValueScope = {
  css: [
    'meta.property-value.css',
    'support.constant.property-value.css',
    'meta.embedded.block.css'
  ],
  less: [
    'meta.property-value.less',
    'support.constant.property-value.less',
    'meta.embedded.block.less'
  ],
  scss: [
    'meta.property-value.scss',
    'support.constant.property-value.scss',
    'meta.embedded.block.scss'
  ],
  stylus: [
    'meta.property-value.styl',
    'support.constant.property-value.styl',
    'meta.embedded.block.styl'
  ]
}

const numericScopes = {
  css: ['constant.numeric.css'],
  less: ['constant.numeric.less'],
  scss: ['constant.numeric.scss'],
  stylus: ['constant.numeric.styl']
}

const cssValueScopes = {
  css: ['support.function.misc.css', 'variable.argument.css'],
  less: ['support.function.misc.less', 'variable.argument.less'],
  scss: ['support.function.misc.scss', 'variable.argument.scss'],
  stylus: ['support.function.misc.styl', 'variable.argument.styl']
}

const pseudoClassScopes = {
  css: ['entity.other.attribute-name.pseudo-class.css'],
  less: ['entity.other.attribute-name.pseudo-class.less'],
  scss: ['entity.other.attribute-name.pseudo-class.scss'],
  stylus: ['entity.other.attribute-name.pseudo-class.styl']
}

const pseudoElementScopes = {
  css: ['entity.other.attribute-name.pseudo-element.css'],
  less: ['entity.other.attribute-name.pseudo-element.less'],
  scss: ['entity.other.attribute-name.pseudo-element.scss'],
  stylus: ['entity.other.attribute-name.pseudo-element.styl']
}

const parentSelectorScope = {
  css: ['entity.other.attribute-name.parent-selector.css'],
  less: ['entity.other.attribute-name.parent-selector.less'],
  scss: ['entity.other.attribute-name.parent-selector.scss'],
  stylus: ['entity.other.attribute-name.parent-selector.styl']
}

const patternScope = {
  css: ['keyword.operator.pattern.css'],
  less: ['keyword.operator.pattern.less'],
  scss: ['keyword.operator.pattern.scss'],
  stylus: ['keyword.operator.pattern.styl']
}

const styleValue = () => ({
  name: 'style::props',
  scope: [
    ...propsValueScope.css,
    ...propsValueScope.less,
    ...propsValueScope.scss,
    ...propsValueScope.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}200`)}`
  }
})

const styleConstantsValue = () => ({
  name: 'style::props',
  scope: [
    ...numericScopes.css,
    ...numericScopes.less,
    ...numericScopes.scss,
    ...numericScopes.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`
  }
})

const styleCssVariables = () => ({
  name: 'style::props',
  scope: [
    ...cssValueScopes.css,
    ...cssValueScopes.less,
    ...cssValueScopes.scss,
    ...cssValueScopes.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}500`)}`
  }
})

const styleHover = () => ({
  name: 'pseudo::class',
  scope: [
    ...pseudoClassScopes.css,
    ...pseudoClassScopes.less,
    ...pseudoClassScopes.scss,
    ...pseudoClassScopes.stylus,
    ...parentSelectorScope.css,
    ...parentSelectorScope.less,
    ...parentSelectorScope.scss,
    ...parentSelectorScope.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}600`)}`
  }
})

const stylePseudo = () => ({
  name: 'pseudo::element',
  scope: [
    ...pseudoElementScopes.css,
    ...pseudoElementScopes.less,
    ...pseudoElementScopes.scss,
    ...pseudoElementScopes.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}500`)}`
  }
})

const stylePattern = () => ({
  name: 'pseudo::element',
  scope: [
    ...patternScope.css,
    ...patternScope.less,
    ...patternScope.scss,
    ...patternScope.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}500`)}`
  }
})

export default [
  styleValue,
  styleConstantsValue,
  styleCssVariables,
  styleHover,
  stylePseudo,
  stylePattern
]
