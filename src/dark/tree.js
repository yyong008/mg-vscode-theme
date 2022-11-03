import { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/Tree').default}
 */
const tree = () => ({
  ['tree.indentGuidesStroke']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['tree.tableColumnsBorder']: '',
  ['tree.tableOddRowsBackground']: ''
})

export default {
  tree
}
