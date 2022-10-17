import menuJson from './json/menu.json'
import menuBarJson from './json/menuBar.json'

export default function menu() {
  return {
    ...menuJson,
    ...menuBarJson
  }
}
