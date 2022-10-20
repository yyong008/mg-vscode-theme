import tsxModule from './module.js'
import tsxConst from './const.js'
import tsxAsyncAwait from './async.js'
import tsxFunction from './function.js'
import tsxComment from './comment.js'
import tsxTemplate from './template.js'
import tsxVariable from './variable.js'
import tsxOperator from './operator.js'
import tsxDitional from './conditional.js'
import tsxObject from './object.js'
import tsxString from './string.js'
import tsxLoop from './loop.js'
import tsxLabel from './labelsynax.js'
import tsxEscape from './escape.js'
import tsxClass from './class.js'
import tsxEnum from './enum.js'
import tsxInterface from './interface.js'
import tsxNamespace from './namespace.js'
import tsxTypeSystem from './type-system.js'
import tsxRegExp from './regexp.js'
import tsx from './tsx.js'

export default function tsxColorTokens() {
  return [
    ...tsxModule,
    ...tsxConst,
    ...tsxAsyncAwait,
    ...tsxFunction,
    ...tsxComment,
    ...tsxTemplate,
    ...tsxVariable,
    ...tsxOperator,
    ...tsxDitional,
    ...tsxObject,
    ...tsxString,
    ...tsxLoop,
    ...tsxLabel,
    ...tsxEscape,
    ...tsxClass,
    ...tsxEnum,
    ...tsxInterface,
    ...tsxNamespace,
    ...tsxTypeSystem,
    ...tsxRegExp,
    ...tsx
  ]
}
