import scrollbarJson from './json/scrollbar.json'
import scrollbarSlider from './json/scrollbarSlider.json'

export default function scrollbarControl() {
  return {
    ...scrollbarJson,
    ...scrollbarSlider
  }
}
