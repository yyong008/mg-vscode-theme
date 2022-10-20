// Codicon
import colors from '../../designs/index.js'

const tsTypePrimitive = {
  name: 'ts::type.primitive',
  scope: [
    'support.type.primitive.ts',
    'entity.name.type.ts',
    'entity.name.type.alias.ts'
  ],
  settings: {
    foreground: colors.blueColors300,
    fontStyle: 'bold'
  }
}

const tsTypeBuildin = {
  name: 'ts::type.buildin',
  scope: ['support.type.builtin.ts'],
  settings: {
    foreground: colors.greenColors400,
    fontStyle: 'bold'
  }
}

const tsTypeType = {
  name: 'ts::type.key',
  scope: ['storage.type.type.ts'],
  settings: {
    foreground: colors.blueColors500,
    fontStyle: 'bold'
  }
}

export default [tsTypePrimitive, tsTypeBuildin, tsTypeType]
