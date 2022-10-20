// import statusBarJson from './json/statusBar.json' assert { type: 'json' }
// import statusBarItemJson from './json/statusBarItem.json' assert { type: 'json' }

import colors from '../designs/index.js'

export default function statusBar() {
  const $statusBarJson = {
    [`statusBar.background`]: colors.greenColors900,
    [`statusBarItem.activeBackground`]: colors.goldColors900,
    [`statusBarItem.hoverBackground`]: colors.goldColors900,
    [`statusBarItem.activeForeground`]: colors.white,
    [`statusBar.foreground`]: colors.black
  }
  return $statusBarJson
}
