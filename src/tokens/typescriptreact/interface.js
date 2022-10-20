import colors from '../../designs/index.js'

const tsxInterface = {
  name: 'tsx::interface',
  scope: ['storage.type.interface.tsx'],
  settings: {
    foreground: colors.purpleColors400,
    fontStyle: 'italic bold'
  }
}

const tsxInterfaceName = {
  name: 'tsx::interface::name',
  scope: ['meta.interface.tsx'],
  settings: {
    foreground: colors.blueColors400
  }
}

export default [tsxInterface, tsxInterfaceName]
