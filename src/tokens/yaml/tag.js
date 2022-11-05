import {
  mapColors,
  getRuntimeColors,
  mapColorsReverse
} from '../../designs/index.js'

const tagYaml = () => ({
  name: 'yaml::tagProps',
  scope: [
    'entity.name.tag.yaml',
    'punctuation.separator.key-value.mapping.yaml'
  ],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`
  }
})

const yamlPlain = () => ({
  name: 'yaml::tagProps',
  scope: ['string.unquoted.plain.out.yaml'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}500`)}`
  }
})

const yamlInMd = () => ({
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
    foreground: `${mapColors(`${getRuntimeColors()}700`)}`,
    fontStyle: 'bold'
  }
})

export default [tagYaml, yamlPlain, yamlInMd]
