import activityBarJson from './json/activityBar.json'
import activityBarBadgeJson from './json/activityBarBadge.json'
import activityBarItemJson from './json/activityBarItem.json'

export default function activityBar() {
  return {
    ...activityBarJson,
    ...activityBarBadgeJson,
    ...activityBarItemJson
  }
}
