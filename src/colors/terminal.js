import terminalJson from './json/terminal.json'
import terminalCursorJson from './json/terminalCursor.json'
import terminalCommandDecorationJson from './json/terminalCommandDecoration.json'
import terminalOverviewRuler from './json/terminalOverviewRuler.json'

export default function terminal() {
  return {
    ...terminalJson,
    ...terminalCursorJson,
    ...terminalCommandDecorationJson,
    ...terminalOverviewRuler
  }
}
