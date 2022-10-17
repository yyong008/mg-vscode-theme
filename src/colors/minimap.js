import minimapJson from './json/minimap.json'
import minimapGutter from './json/minimapGutter.json'
import minimapSlider from './json/minimapSlider.json'

export default function minimap() {
  return {
    ...minimapJson,
    ...minimapGutter,
    ...minimapSlider
  }
}
