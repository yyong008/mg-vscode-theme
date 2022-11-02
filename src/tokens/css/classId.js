import { getRuntimeColors, mapColors } from '../../designs/index.js'

const tagClassIdScope = {
  css: [
    'entity.name.tag.css',
    'entity.other.attribute-name.id.css',
    'entity.other.attribute-name.class.css'
  ],
  less: [
    'entity.name.tag.less',
    'entity.other.attribute-name.id.less',
    'entity.other.attribute-name.class.less'
  ],
  scss: [
    'entity.name.tag.scss',
    'entity.other.attribute-name.id.scss',
    'entity.other.attribute-name.class.scss'
  ],
  stylus: [
    'entity.name.tag.styl',
    'entity.other.attribute-name.id.styl',
    'entity.other.attribute-name.class.styl'
  ]
}

const cssTagAndClassAndId = () => ({
  name: 'style::class',
  scope: [
    ...tagClassIdScope.css,
    ...tagClassIdScope.less,
    ...tagClassIdScope.scss,
    ...tagClassIdScope.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}400`)}`,
    fontStyle: 'bold italic'
  }
})

export default [cssTagAndClassAndId]
