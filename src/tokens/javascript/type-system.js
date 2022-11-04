import { mapColors, getRuntimeColors } from '../../designs/index.js'

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
    foreground: `${mapColors(`${getRuntimeColors()}600`)}`,
    fontStyle: 'bold'
  }
})

const tsxTypeBuildin = () => ({
  name: 'tsx::type.buildin',
  scope: ['support.type.builtin.jsx', 'support.type.builtin.tsx'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}400`)}`,
    fontStyle: 'bold'
  }
})

const tsxTypeType = () => ({
  name: 'tsx::type.key',
  scope: ['storage.type.type.jsx', 'storage.type.type.tsx'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}700`)}`,
    fontStyle: 'bold italic'
  }
})

export default [tsxTypePrimitive, tsxTypeBuildin, tsxTypeType]
