import colors from '../designs/index.js'

const activityBar = {
  ['activityBar.background']: colors.grayColors1000,
  ['activityBar.foreground']: colors.limeColors400
}

const activityBarBadge = {
  ['activityBarBadge.background']: colors.volcanoColors600,
  ['activityBarBadge.foreground']: colors.limeColors400
}

export default { ...activityBar, ...activityBarBadge }
