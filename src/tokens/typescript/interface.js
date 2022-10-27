import colors from '../../designs/index.js'

const tsInterface = {
  name: 'ts::interface',
  scope: ['storage.type.interface.ts'],
  settings: {
    foreground: colors.purpleColors400
  }
}

const tsInterfaceName = {
  name: 'ts::interface::blue',
  scope: ['meta.interface.ts'],
  settings: {
    foreground: colors.blueColors400
  }
}

export default [tsInterface, tsInterfaceName]
