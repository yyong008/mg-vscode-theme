import constrastColors from './constrast-colors.js'
import baseColor from './base-colors.js'
import windowBorder from './window-border.js'
import textColor from './text-colors.js'
// import comment from './comment.js'
import statusBar from './status-bar-colors.js'

export default function index() {
  return {
    colors: {
      // ...constrastColors(),
      // ...baseColor(),
      // ...windowBorder(),
      // ...textColor()
      // ...comment()
      ...statusBar()
    }
  }
}
