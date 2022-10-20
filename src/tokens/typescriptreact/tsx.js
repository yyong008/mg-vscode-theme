import colors from '../../designs/index.js'

const tsx = {
  name: 'tsx::tag',
  scope: ['entity.name.tag.tsx'],
  settings: {
    foreground: colors.greenColors300
  }
}

const tsxProps = {
  name: 'tsx:::tag::props',
  scope: ['entity.other.attribute-name.tsx'],
  settings: {
    foreground: colors.greenColors700
  }
}

const spunctuation = {
  name: 'tsx::spunctuation',
  scope: [
    'punctuation.definition.tag.begin.tsx',
    'punctuation.definition.tag.end.tsx',
    'punctuation.separator.key-value.tsx'
  ],
  settings: {
    foreground: colors.greenColors800
  }
}

export default [tsx, tsxProps, spunctuation]
