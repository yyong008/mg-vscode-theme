import { removeNullStrAttr } from '../utils/index.js'

const sprObjFromFn = async (path) => {
  const exportObj = await (await import(`${path}`)).default

  let returnObj = {}
  for (let objFn in exportObj) {
    if (typeof exportObj[objFn] === 'function') {
      returnObj = {
        ...returnObj,
        ...exportObj[objFn]()
      }
    }
  }

  return returnObj
}

export default async function createThemeColors() {
  const _colors = {
    ...(await sprObjFromFn('./action-colors.js')),
    ...(await sprObjFromFn('./activity-bar.js')),
    ...(await sprObjFromFn('./badge.js')),
    ...(await sprObjFromFn('./banner-colors.js')),
    ...(await sprObjFromFn('./breadcrumbs-colors.js')),
    ...(await sprObjFromFn('./base-colors.js')),
    ...(await sprObjFromFn('./button-control.js')),
    ...(await sprObjFromFn('./chart-colors.js')),
    ...(await sprObjFromFn('./command-center-colors.js')),
    ...(await sprObjFromFn('./constrast-colors.js')),
    ...(await sprObjFromFn('./debug.js')),
    ...(await sprObjFromFn('./diff-editor-colors.js')),
    ...(await sprObjFromFn('./dropdown-control.js')),
    ...(await sprObjFromFn('./editor.js')),
    ...(await sprObjFromFn('./extensions-colors.js')),
    ...(await sprObjFromFn('./git-colors.js')),
    ...(await sprObjFromFn('./input-control.js')),
    ...(await sprObjFromFn('./keybinding.js')),
    ...(await sprObjFromFn('./lists.js')),
    ...(await sprObjFromFn('./menu.js')),
    ...(await sprObjFromFn('./merge-conflicts-colors.js')),
    ...(await sprObjFromFn('./minimap.js')),
    ...(await sprObjFromFn('./notebook-colors.js')),
    ...(await sprObjFromFn('./notification-colors.js')),
    ...(await sprObjFromFn('./panel-colors.js')),
    ...(await sprObjFromFn('./peek-view-colors.js')),
    ...(await sprObjFromFn('./picker-group.js')),
    ...(await sprObjFromFn('./ports-colors.js')),
    ...(await sprObjFromFn('./progress-bar.js')),
    ...(await sprObjFromFn('./quick-input.js')),
    ...(await sprObjFromFn('./quick-picker-colors.js')),
    ...(await sprObjFromFn('./scrollbar-control.js')),
    ...(await sprObjFromFn('./selection.js')),
    ...(await sprObjFromFn('./settings.js')),
    ...(await sprObjFromFn('./side-bar.js')),
    ...(await sprObjFromFn('./snippets-colors.js')),
    ...(await sprObjFromFn('./source-control-color.js')),
    ...(await sprObjFromFn('./status-bar-colors.js')),
    ...(await sprObjFromFn('./symbol-icons-colors.js')),
    ...(await sprObjFromFn('./tab.js')),
    ...(await sprObjFromFn('./terminal.js')),
    ...(await sprObjFromFn('./testing-color.js')),
    ...(await sprObjFromFn('./tree.js')),
    ...(await sprObjFromFn('./welcome-page-colors.js')),
    ...(await sprObjFromFn('./widget.js')),
    ...(await sprObjFromFn('./window.js'))
  }

  return removeNullStrAttr(_colors)
}
