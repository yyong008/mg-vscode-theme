import tomlComment from './comment.js'
import string from './string.js'
import prop from './prop.js'

export default function tomlLanguage() {
  return [...tomlComment, ...string, ...prop]
}
