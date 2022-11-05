import colors, {
  mapColors,
  mapColorsReverse,
  getRuntimeColors
} from '../../designs/index.js'

const dockerComment = () => ({
  name: 'docker::comment',
  scope: ['comment.line.number-sign.dockerfile'],
  settings: {
    foreground: colors.grayColors800,
    fontStyle: 'italic'
  }
})

const dockerSource = () => ({
  name: 'docker::key',
  scope: ['source.dockerfile'],
  setting: {
    foreground: `${mapColors(`${getRuntimeColors()}600`)}`
  }
})

const dockerKey = () => ({
  name: 'docker::key',
  scope: ['keyword.other.special-method.dockerfile'],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`,
    fontStyle: 'bold'
  }
})

export default [dockerComment, dockerKey, dockerSource]
