import colors, { mapColors, getRuntimeColors } from '../../designs/index.js'

const dockerComment = () => ({
  name: 'docker::comment',
  scope: ['comment.line.number-sign.dockerfile'],
  settings: {
    foreground: colors.grayColors800
  }
})

const dockerKey = () => ({
  name: 'docker::key',
  scope: ['keyword.other.special-method.dockerfile'],
  setting: {
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`
  }
})

const dockerSource = () => ({
  name: 'docker::key',
  scope: ['	source.dockerfile'],
  setting: {
    foreground: `${mapColors(`${getRuntimeColors()}600`)}`
  }
})

export default [dockerComment, dockerKey, dockerSource]
