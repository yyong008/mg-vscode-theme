import colors, { mapColors, getRuntimeColors } from '../../designs/index.js'

const tsxInterface = () => ({
  name: 'tsx::interface',
  scope: ['storage.type.interface.jsx', 'storage.type.interface.tsx'],
  settings: {
    foreground: colors.purpleColors400
  }
})

const tsxInterfaceName = () => ({
  name: 'tsx::interface::name',
  scope: ['meta.interface.jsx', 'meta.interface.tsx'],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}400`)}`
  }
})

export default [tsxInterface, tsxInterfaceName]
