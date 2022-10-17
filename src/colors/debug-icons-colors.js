import debugIconsJson from './json/debugIcon.json'
import debugConsoleJson from './json/debugConsole.json'
import debugConsoleInputIconJson from './json/debugConsoleInputIcon.json'

export default function debugIconColors() {
  return {
    ...debugIconsJson,
    ...debugConsoleJson,
    ...debugConsoleInputIconJson
  }
}
