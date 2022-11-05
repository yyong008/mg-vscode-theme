import yamlTag from './tag.js'
import yamlComment from './comment.js'

export default function yamlLanuage() {
  return [...yamlTag, ...yamlComment]
}
