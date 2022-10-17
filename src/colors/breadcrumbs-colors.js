import breadcrumbJson from './json/breadcrumb.json'
import breadcrumbPicker from './json/breadcrumbPicker.json'

export default function breadcrumbColors() {
  return {
    ...breadcrumbJson,
    ...breadcrumbPicker
  }
}
