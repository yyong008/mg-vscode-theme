import colors from '../../designs/index.js'

const tsInterface = {
  name: 'ts::namespace',
  scope: ['storage.type.namespace.ts'],
  settings: {
    foreground: colors.purpleColors400
  }
}

const tsInterfaceName = {
  name: 'ts::namespace::blue',
  scope: ['entity.name.type.module.ts'],
  settings: {
    foreground: colors.blueColors700
  }
}

export default [tsInterface, tsInterfaceName]
