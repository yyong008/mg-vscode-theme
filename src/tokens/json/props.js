import colors from '../../designs/index.js'

const jsonKey = {
  name: 'json::key',
  scope: [
    'support.type.property-name.json',
    'support.type.property-name.json.comments'
  ],
  settings: {
    foreground: colors.cyanColors400
  }
}

const jsonValue = {
  name: 'json::value',
  scope: ['string.quoted.double.json'],
  settings: {
    foreground: colors.goldColors500
  }
}

const jsonConstant = {
  name: 'json::value',
  scope: ['constant.language.json', 'constant.numeric.json'],
  settings: {
    foreground: colors.purpleColors400
  }
}

export default [jsonKey, jsonValue, jsonConstant]
