import { mapColors, getRuntimeColors } from '../../designs/index.js'

const punctuationScopes = {
  css: ['punctuation.definition.entity.css'],
  less: ['punctuation.definition.entity.less'],
  scss: ['punctuation.definition.entity.scss'],
  stylus: ['punctuation.definition.entity.styl']
}

const stylePunctuation = () => ({
  name: 'style::props',
  scope: [
    ...punctuationScopes.css,
    ...punctuationScopes.less,
    ...punctuationScopes.scss,
    ...punctuationScopes.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}600`)}`
  }
})

export default [stylePunctuation]
