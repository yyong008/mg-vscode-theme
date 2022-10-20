import colors from '../../designs/index.js'

const tagYaml = {
  name: 'yaml::tagProps',
  scope: ['entity.name.tag.yaml'],
  settings: {
    foreground: colors.magentaColors400
  }
}

const yamlPlain = {
  name: 'yaml::tagProps',
  scope: ['string.unquoted.plain.out.yaml'],
  settings: {
    foreground: colors.goldColors500
  }
}

const yamlInMd = {
  name: 'yaml::md',
  scope: [
    'punctuation.definition.markdown',
    'entity.other.document.begin.yaml',
    'entity.other.document.end.yaml',
    'fenced_code.block.language.markdown',
    'punctuation.definition.raw.markdown',
    'punctuation.definition.link.description.begin.markdown',
    'punctuation.definition.link.description.end.markdown',
    'punctuation.definition.metadata.markdown'
  ],
  settings: {
    foreground: colors.magentaColors700,
    fontStyle: 'bold'
  }
}

export default [tagYaml, yamlPlain, yamlInMd]
