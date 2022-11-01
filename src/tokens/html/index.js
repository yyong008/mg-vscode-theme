import htmlTag from './tag.js'
import htmlComment from './comment.js'
import htmlAttr from './attr.js'

export default function htmlLanguage() {
  return [...htmlTag, ...htmlComment, ...htmlAttr]
}
