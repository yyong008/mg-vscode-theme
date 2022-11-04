import colors from '../../designs/index.js'

const tsxTypePrimitive = () => ({
  name: 'tsx::type.primitive',
  scope: [
    'support.type.primitive.jsx',
    'entity.name.type.jsx',
    'entity.name.type.alias.jsx',
    // tsx
    'support.type.primitive.tsx',
    'entity.name.type.tsx',
    'entity.name.type.alias.tsx'
  ],
  settings: {
    foreground: colors.cyanColors600,
    fontStyle: 'bold'
  }
})

const tsxTypeBuildin = () => ({
  name: 'tsx::type.buildin',
  scope: ['support.type.builtin.jsx', 'support.type.builtin.tsx'],
  settings: {
    foreground: colors.greenColors400,
    fontStyle: 'bold'
  }
})

const tsxTypeType = () => ({
  name: 'tsx::type.key',
  scope: ['storage.type.type.jsx', 'storage.type.type.tsx'],
  settings: {
    foreground: colors.cyanColors600,
    fontStyle: 'bold italic'
  }
})

export default [tsxTypePrimitive, tsxTypeBuildin, tsxTypeType]
