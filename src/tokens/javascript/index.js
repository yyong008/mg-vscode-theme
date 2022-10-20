import jsModule from './module.js'

import jsConst from './const.js'
import jsAsyncAwait from './async.js'
import jsFunction from './function.js'
import jsComment from './comment.js'
import jsTemplate from './template.js'
import jsVariable from './variable.js'
import jsOperator from './operator.js'
import jsDitional from './conditional.js'
import jsObject from './object.js'
import jsString from './string.js'
import jsLoop from './loop.js'
import jsLabel from './labelsynax.js'
import jsEscape from './escape.js'
import jsClass from './class.js'
import punctuation from './punctuation.js'

export default function jsLanguage() {
  return [
    ...jsModule,
    ...jsConst,
    ...jsAsyncAwait,
    ...jsFunction,
    ...jsComment,
    ...jsTemplate,
    ...jsVariable,
    ...jsOperator,
    ...jsDitional,
    ...jsObject,
    ...jsString,
    ...jsLoop,
    ...jsLabel,
    ...jsEscape,
    ...jsClass,
    ...punctuation
  ]
}
