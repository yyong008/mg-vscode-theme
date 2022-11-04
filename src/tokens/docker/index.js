import docker from './docker.js'
import string from './string.js'

export default function dockerfile() {
  return [...docker, ...string]
}
