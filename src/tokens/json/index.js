import jsonComment from './comment.js'
import jsonKeyValue from './props.js'

export default function jsonLanguage() {
  return [...jsonComment, ...jsonKeyValue]
}
