import { mapColors, getRuntimeColors } from '../../designs/index.js'

const stringScopes = {
  css: ['string.quoted.single.css', 'string.quoted.double.css'],
  less: ['string.quoted.single.less', 'string.quoted.double.less'],
  scss: ['string.quoted.single.scss', 'string.quoted.double.scss'],
  stylus: ['string.quoted.single.styl', 'string.quoted.double.styl']
}

const vendoredPropertyName = () => ({
  name: 'style::vendored.property-name',
  scope: [
    ...stringScopes.css,
    ...stringScopes.less,
    ...stringScopes.scss,
    ...stringScopes.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}600`)}`
  }
})

export default [vendoredPropertyName]
