import tsModule from './module.js'
import tsConst from './const.js'
import tsAsyncAwait from './async.js'
import tsFunction from './function.js'
import tsComment from './comment.js'
import tsTemplate from './template.js'
import tsVariable from './variable.js'
import tsOperator from './operator.js'
import tsDitional from './conditional.js'
import tsObject from './object.js'
import tsString from './string.js'
import tsLoop from './loop.js'
import tsLabel from './labelsynax.js'
import tsEscape from './escape.js'
import tsClass from './class.js'
import tsEnum from './enum.js'
import tsInterface from './interface.js'
import tsNamespace from './namespace.js'
import tsTypeSystem from './type-system.js'
import tsRegExp from './regexp.js'

export default function tsColorTokens() {
  return [
    ...tsModule,
    ...tsConst,
    ...tsAsyncAwait,
    ...tsFunction,
    ...tsComment,
    ...tsTemplate,
    ...tsVariable,
    ...tsOperator,
    ...tsDitional,
    ...tsObject,
    ...tsString,
    ...tsLoop,
    ...tsLabel,
    ...tsEscape,
    ...tsClass,
    ...tsEnum,
    ...tsInterface,
    ...tsNamespace,
    ...tsTypeSystem,
    ...tsRegExp
  ]
}
