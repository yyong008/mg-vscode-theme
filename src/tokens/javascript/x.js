import { mapColors, getRuntimeColors } from '../../designs/index.js'

const tsx = () => ({
  name: 'tsx::tag',
  scope: ['entity.name.tag.jsx', 'entity.name.tag.tsx'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`
  }
})

const tsxProps = () => ({
  name: 'tsx:::tag::props',
  scope: ['entity.other.attribute-name.jsx', 'entity.other.attribute-name.tsx'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}700`)}`
  }
})

const spunctuation = () => ({
  name: 'tsx::spunctuation',
  scope: [
    'punctuation.definition.tag.begin.jsx',
    'punctuation.definition.tag.end.jsx',
    'punctuation.separator.key-value.jsx',
    // tsx
    'punctuation.definition.tag.begin.tsx',
    'punctuation.definition.tag.end.tsx',
    'punctuation.separator.key-value.tsx'
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}800`)}`
  }
})

const typeKeyword = () => ({
  name: 'tsx::spunctuation',
  scope: ['keyword.control.type.tsx', 'keyword.control.type.jsx'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}800`)}`
  }
})

export default [tsx, tsxProps, spunctuation, typeKeyword]
