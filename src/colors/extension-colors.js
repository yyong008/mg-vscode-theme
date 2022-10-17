import extensionButtonJson from './json/extensionButton.json'
import extensionBadgeJson from './json/extensionBadge.json'
import extensionIconJson from './json/extensionIcon.json'

export default function extensionColors() {
  return {
    ...extensionButtonJson,
    ...extensionBadgeJson,
    ...extensionIconJson
  }
}
