import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const variable = () => ({
  name: 'shell::variable',
  scope: [
    // $0, $1,...
    'punctuation.definition.variable.shell',
    'variable.other.special.shell', // $0 -> 0
    'variable.other.positional.shell', // $1
    'variable.other.normal.shell' // val=`expr 2 + 2` echo "两数之和为 : $val"
  ],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`
  }
})

export default [variable]
