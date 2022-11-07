import keyword from './keyword.js'
import variables from './variable.js'
import string from './string.js'
import functions from './function.js'
import comment from './comment.js'
import attr from './attribute.js'
import moduleFn from './module.js'
import struct from './struct.js'
import control from './control.js'
import escape from './escape.js'
import operator from './operator.js'
import typeSystem from './type-system.js'
import macro from './macro.js'

export default function rustLanuage() {
  return [
    ...keyword,
    ...variables,
    ...string,
    ...functions,
    ...comment,
    ...attr,
    ...moduleFn,
    ...struct,
    ...control,
    ...escape,
    ...operator,
    ...typeSystem,
    ...macro
  ]
}
