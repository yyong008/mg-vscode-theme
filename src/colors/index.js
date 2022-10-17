import constrastColors from './constrast-colors.js'
import baseColor from './base-colors.js'
import windowBorder from './window-border.js'
import textColor from './text-colors.js'

export default function index() {
  return {
    name: 'iNature',
    semanticHighlighting: false,
    colors: {
      ...constrastColors(),
      ...baseColor(),
      ...windowBorder(),
      ...textColor()
    },
    tokenColors: []
  }
}
