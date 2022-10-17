import treeJson from './json/tree.json'
import listJson from './json/list.json'
import listFilterWidget from './json/listFilterWidget.json'

export default function ListTree() {
  return {
    ...listJson,
    ...treeJson,
    ...listFilterWidget
  }
}
