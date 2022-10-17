import notificationCenterJson from './json/notificationCenter.json'
import notificationCenterHeaderJson from './json/notificationCenterHeader.json'
import notificationToastJson from './json/notificationToast.json'
import notificationsJson from './json/notifications.json'
import notificationLinkJson from './json/notificationLink.json'
import notificationsErrorIconJson from './json/notificationsErrorIcon.json'
import notificationsWarningIconJson from './json/notificationsWarningIcon.json'
import notificationsInfoIconJson from './json/notificationsInfoIcon.json'

export default function notifications() {
  return {
    ...notificationCenterJson,
    ...notificationCenterHeaderJson,
    ...notificationToastJson,
    ...notificationsJson,
    ...notificationLinkJson,
    ...notificationsErrorIconJson,
    ...notificationsWarningIconJson,
    ...notificationsInfoIconJson
  }
}
