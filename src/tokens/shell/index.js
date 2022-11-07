import variable from './variable.js'
import comment from './comment.js'
import string from './string.js'
import modifier from './modifier.js'
import punctuation from './punctuation.js'
import operator from './operator.js'
import escape from './escape.js'
import builtin from './builtin.js'

export default function shell() {
  return [
    ...variable,
    ...comment,
    ...string,
    ...modifier,
    ...punctuation,
    ...operator,
    ...escape,
    ...builtin
  ]
}
