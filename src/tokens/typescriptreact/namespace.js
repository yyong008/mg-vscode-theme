import colors from '../../designs/index.js'

const tsxInterface = {
  name: 'tsx::namespace',
  scope: ['storage.type.namespace.tsx'],
  settings: {
    foreground: colors.purpleColors400
  }
}

const tsxInterfaceName = {
  name: 'tsx::namespace::blue',
  scope: ['entity.name.type.module.tsx'],
  settings: {
    foreground: colors.blueColors700
  }
}

export default [tsxInterface, tsxInterfaceName]
