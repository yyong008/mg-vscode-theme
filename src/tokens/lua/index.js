import luaConst from './const.js'
import luaFunction from './function.js'
import luaComment from './comment.js'
import luaTemplate from './template.js'
import luaVariable from './variable.js'
import luaOperator from './operator.js'
import luaDitional from './conditional.js'
import luaObject from './object.js'
import luaString from './string.js'
import luaLoop from './loop.js'
import luaEscape from './escape.js'
import luaRegExp from './regexp.js'

export default function luaColorTokens() {
  return [
    ...luaConst,
    ...luaFunction,
    ...luaComment,
    ...luaTemplate,
    ...luaVariable,
    ...luaOperator,
    ...luaDitional,
    ...luaObject,
    ...luaString,
    ...luaLoop,
    ...luaEscape,
    ...luaRegExp
  ]
}
