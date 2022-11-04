import colors from '../../designs/index.js'

const tsxEnum = () => ({
  name: 'tsx::enum',
  scope: ['storage.type.enum.jsx', 'storage.type.enum.tsx'],
  settings: {
    foreground: colors.purpleColors300
  }
})

const tsxEnumEntity = () => ({
  name: 'tsx::enum::entity',
  scope: ['entity.name.type.enum.jsx', 'entity.name.type.enum.tsx'],
  settings: {
    foreground: colors.greenColors300
  }
})

const tsxEnumMember = () => ({
  name: 'tsx::enum::enummember',
  scope: ['variable.other.enummember.jsx', 'variable.other.enummember.tsx'],
  settings: {
    foreground: colors.blueColors400
  }
})

export default [tsxEnum, tsxEnumEntity, tsxEnumMember]