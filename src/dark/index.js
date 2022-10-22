import { removeNullStrAttr } from '../utils/index.js'

export default async function createThemeColors() {
  const _colors = {
    ...(await import('./constrast-colors.js')).default,
    ...(await import('./base-colors.js')).default,
    ...(await import('./terminal.js')).default,
    ...(await import('./activity-bar.js')).default,
    ...(await import('./badge.js')).default,
    ...(await import('./menu.js')).default,
    ...(await import('./editor.js')).default,
    ...(await import('./peek-view-colors.js')).default,
    ...(await import('./side-bar.js')).default,
    ...(await import('./button-control.js')).default,
    ...(await import('./tab.js')).default,
    ...(await import('./minimap.js')).default,
    ...(await import('./input-control.js')).default,
    ...(await import('./lists.js')).default,
    ...(await import('./diff-editor-colors.js')).default,
    ...(await import('./panel-colors.js')).default,
    ...(await import('./title-bar-colors.js')).default,
    ...(await import('./quick-input.js')).default,
    ...(await import('./selection.js')).default,
    ...(await import('./window.js')).default
  }

  return removeNullStrAttr(_colors)
}
