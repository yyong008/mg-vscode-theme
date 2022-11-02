import { mapColors, getRuntimeColors } from '../../designs/index.js'

const vendorScopes = {
  css: ['support.type.vendored.property-name.css'],
  less: ['support.type.vendored.property-name.less'],
  scss: ['support.type.vendored.property-name.scss'],
  stylus: ['support.type.vendored.property-name.stylus']
}

const vendoredPropertyName = () => ({
  name: 'style::vendored.property-name',
  scope: [
    ...vendorScopes.css,
    ...vendorScopes.less,
    ...vendorScopes.scss,
    ...vendorScopes.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}400`)}`
  }
})

export default [vendoredPropertyName]
