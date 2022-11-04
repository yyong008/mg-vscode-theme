import colors from '../../designs/index.js'

const vueSyntaxBind = () => ({
  name: 'vue::bind',
  scope: [
    'punctuation.attribute-shorthand.bind.html.vue',
    'keyword.control.conditional.vue'
  ],
  settings: {
    foreground: colors.magentaColors200,
    fontStyle: 'bold'
  }
})

const vueSyntaxSlot = () => ({
  name: 'vue::slot',
  scope: [
    'punctuation.attribute-shorthand.slot.html.vue',
    'entity.other.attribute-name.html.vue'
  ],
  settings: {
    foreground: colors.yellowColors300
  }
})

const vueSyntaxScript = () => ({
  name: 'vue::scriptTag',
  scope: [
    'entity.name.tag.template.html.vue',
    'entity.name.tag.script.html.vue',
    'entity.name.tag.style.html.vue'
  ],
  settings: {
    foreground: colors.greenColors400,
    fontStyle: 'bold'
  }
})

const vueSyntaxShortEvent = () => ({
  name: 'vue::shortEvent',
  scope: ['punctuation.attribute-shorthand.event.html.vue'],
  settings: {
    foreground: colors.greenColors400,
    fontStyle: 'bold'
  }
})

export default [
  vueSyntaxBind,
  vueSyntaxSlot,
  vueSyntaxScript,
  vueSyntaxShortEvent
]
