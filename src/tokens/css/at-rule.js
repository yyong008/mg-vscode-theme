import { getRuntimeColors, mapColors } from '../../designs/index.js'

const atRuleScopes = {
  css: [
    'keyword.control.at-rule.css',
    'keyword.control.at-rule.namespace.css',
    'keyword.control.at-rule.import.css',
    'keyword.control.at-rule.keyframes.css',
    'keyword.control.at-rule.media.css',
    'keyword.control.at-rule.page.css',
    'keyword.control.at-rule.supports.css',
    'keyword.control.at-rule.font-face.css',
    'keyword.control.at-rule.font-feature-values.css',
    'keyword.control.at-rule.layer.tailwind',
    'keyword.control.at-rule.counter-style.css',
    'meta.at-rule.header.css'
  ],
  less: [
    'keyword.control.at-rule.less',
    'keyword.control.at-rule.namespace.less',
    'keyword.control.at-rule.import.less',
    'keyword.control.at-rule.keyframes.less',
    'keyword.control.at-rule.media.less',
    'keyword.control.at-rule.page.less',
    'keyword.control.at-rule.supports.less',
    'keyword.control.at-rule.font-face.less',
    'keyword.control.at-rule.font-feature-values.less',
    'keyword.control.at-rule.counter-style.less',
    'meta.at-rule.header.less'
  ],
  scss: [
    'keyword.control.at-rule.scss',
    'keyword.control.at-rule.namespace.scss',
    'keyword.control.at-rule.import.scss',
    'keyword.control.at-rule.keyframes.scss',
    'keyword.control.at-rule.media.scss',
    'keyword.control.at-rule.page.scss',
    'keyword.control.at-rule.supports.scss',
    'keyword.control.at-rule.font-face.scss',
    'keyword.control.at-rule.font-feature-values.scss',
    '	keyword.control.at-rule.counter-style.scss',
    'meta.at-rule.header.scss'
  ],
  stylus: [
    'keyword.control.at-rule.styl',
    'keyword.control.at-rule.namespace.styl',
    'keyword.control.at-rule.import.styl',
    'keyword.control.at-rule.keyframes.styl',
    'keyword.control.at-rule.media.styl',
    'keyword.control.at-rule.page.styl',
    'keyword.control.at-rule.supports.styl',
    'keyword.control.at-rule.font-face.styl',
    'keyword.control.at-rule.font-feature-values.styl',
    'keyword.control.at-rule.counter-style.styl',
    'meta.at-rule.header.styl'
  ]
}

const atRule = () => ({
  name: 'style::class',
  scope: [
    ...atRuleScopes.css,
    ...atRuleScopes.less,
    ...atRuleScopes.scss,
    ...atRuleScopes.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}700`)}`,
    fontStyle: 'bold'
  }
})

const keyframeList = () => ({
  name: 'style::class',
  scope: [
    'variable.parameter.keyframe-list.css',
    'variable.parameter.keyframe-list.less',
    'variable.parameter.keyframe-list.scss'
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}500`)}`
  }
})

const keyframePercentage = () => ({
  name: 'style::class',
  scope: [
    'entity.other.keyframe-offset.percentage.css',
    'entity.other.keyframe-offset.percentage.less',
    'entity.other.keyframe-offset.percentage.scss'
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}800`)}`
  }
})

export default [atRule, keyframeList, keyframePercentage]
