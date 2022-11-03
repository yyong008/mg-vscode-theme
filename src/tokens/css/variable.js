import { mapColors, getRuntimeColors } from '../../designs/index.js'

const variableScope = {
  css: ['variable.css', 'variable.argument.css'],
  less: ['variable.less', 'variable.argument.less', 'variable.other.less'],
  scss: ['variable.scss', 'variable.argument.scss'],
  stylus: ['variable.styl', 'variable.argument.styl']
}

const vendoredPropertyName = () => ({
  name: 'style::vendored.property-name',
  scope: [
    ...variableScope.css,
    ...variableScope.less,
    ...variableScope.scss,
    ...variableScope.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}500`)}`
  }
})

export default [vendoredPropertyName]
