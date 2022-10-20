import colors from '../../designs/index.js'

const atRule = {
  name: 'style::class',
  scope: [
    'keyword.control.at-rule.keyframes.css',
    'keyword.control.at-rule.keyframes.less',
    'keyword.control.at-rule.keyframes.scss',
    'keyword.control.at-rule.media.css',
    'keyword.control.at-rule.media.less',
    'keyword.control.at-rule.media.scss',
    'keyword.operator.logical.css',
    'keyword.operator.logical.less',
    'keyword.operator.logical.scss'
  ],
  settings: {
    foreground: colors.redColors400,
    fontStyle: 'bold'
  }
}

const keyframeList = {
  name: 'style::class',
  scope: [
    'variable.parameter.keyframe-list.css',
    'variable.parameter.keyframe-list.less',
    'variable.parameter.keyframe-list.scss'
  ],
  settings: {
    foreground: colors.goldColors200
  }
}

const keyframePercentage = {
  name: 'style::class',
  scope: [
    'entity.other.keyframe-offset.percentage.css',
    'entity.other.keyframe-offset.percentage.less',
    'entity.other.keyframe-offset.percentage.csss'
  ],
  settings: {
    foreground: colors.blueColors300
  }
}

export default [atRule, keyframeList, keyframePercentage]
