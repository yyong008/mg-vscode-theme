import { mapColors, getRuntimeColors } from '../../designs/index.js'

const propsScope = {
  css: ['support.type.property-name.css'],
  less: ['support.type.property-name.less'],
  scss: ['support.type.property-name.scss'],
  stylus: ['support.type.property-name.styl']
}
const styleProps = () => ({
  name: 'style::props',
  scope: [
    ...propsScope.css,
    ...propsScope.less,
    ...propsScope.scss,
    ...propsScope.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}100`)}`,
    fontStyle: 'normal'
  }
})

export default [styleProps]
