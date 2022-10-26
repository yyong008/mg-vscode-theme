import colors from '../designs/index.js'

/**
 * @type {import('../types/Notification').NotificationCenter}
 */
const notificationCenter = {
  ['otificationCenter.border']: ''
}

/**
 * @type {import('../types/Notification').NotificationCenterHeader}
 */
const notificationCenterHeader = {
  ['notificationCenterHeader.foreground']: '',
  ['notificationCenterHeader.background']: ''
}

/**
 * @type {import('../types/Notification').NotificationToast}
 */
const notificationToast = {
  ['notificationToast.border']: ''
}

/**
 * @type {import('../types/Notification').Notifications}
 */
const notifications = {
  ['notifications.foreground']: colors.cyanColors400,
  ['notifications.background']: colors.grayColors1000,
  ['notifications.border']: ''
}

/**
 * @type {import('../types/Notification').NotificationLink}
 */
const notificationLink = {
  ['notificationLink.foreground']: ''
}

/**
 * @type {import('../types/Notification').NotificationsErrorIcon}
 */
const notificationsErrorIcon = {
  ['notificationsErrorIcon.foreground']: ''
}

/**
 * @type {import('../types/Notification').NotificationsWarningIcon}
 */
const notificationsWarningIcon = {
  ['notificationsWarningIcon.foreground']: ''
}

/**
 * @type {import('../types/Notification').NotificationsInfoIcon}
 */
const notificationsInfoIcon = {
  ['notificationsInfoIcon.foreground']: ''
}

export default {
  ...notificationCenter,
  ...notificationCenterHeader,
  ...notificationToast,
  ...notifications,
  ...notificationLink,
  ...notificationsErrorIcon,
  ...notificationsWarningIcon,
  ...notificationsInfoIcon
}
