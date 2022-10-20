import styleSelector from './class.js'
import styleProps from './props.js'
import styleValues from './value.js'
import stylePunctuation from './punctuation.js'
import styleOperator from './operator.js'
import styleComment from './comment.js'
import styleAtRule from './at-rule.js'
import styleVendor from './vendor.js'

export default function styleLanguage() {
  return [
    ...styleSelector,
    ...styleProps,
    ...styleValues,
    ...stylePunctuation,
    ...styleOperator,
    ...styleComment,
    ...styleAtRule,
    ...styleVendor
  ]
}
