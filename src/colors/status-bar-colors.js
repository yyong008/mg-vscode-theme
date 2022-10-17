import statusBarJson from './json/statusBar.json'
import statusBarItemJson from './json/statusBarItem.json'

export default function statusBar() {
  return {
    ...statusBarJson,
    ...statusBarItemJson
  }
}
