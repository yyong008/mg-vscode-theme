import colors from '../../designs/index.js'

const tsEnum = {
  name: 'ts::enum',
  scope: ['storage.type.enum.ts'],
  settings: {
    foreground: colors.purpleColors300,
    fontStyle: 'bold italic'
  }
}

const tsEnumEntity = {
  name: 'ts::enum::entity',
  scope: ['entity.name.type.enum.ts'],
  settings: {
    foreground: colors.greenColors300
  }
}

const tsEnumMember = {
  name: 'ts::enum::enummember',
  scope: ['variable.other.enummember.ts'],
  settings: {
    foreground: colors.blueColors400
  }
}

export default [tsEnum, tsEnumEntity, tsEnumMember]
