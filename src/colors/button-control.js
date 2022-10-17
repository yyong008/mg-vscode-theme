import buttonJson from './json/button.json'
import checkboxJson from './json/checkbox.json'

export default function buttonControl() {
  return {
    ...buttonJson,
    ...checkboxJson
  }
}
