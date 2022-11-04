// import { setRuntimeColors } from '../designs/index.js'

import javaScriptLanuage from './javascript/index.js'
import typeScriptLanuage from './typescript/index.js'
import typescriptReactLanguage from './typescriptreact/index.js'
import jsonLanguage from './json/index.js'
import cssLanguage from './css/index.js'
import htmlLanguage from './html/index.js'
import markdownLanguage from './markdown/index.js'
import yamlLanuage from './yaml/index.js'
import luaLanuage from './lua/index.js'
import vueLanuage from './vue/index.js'

export default function createColorTokens() {
  return [
    ...javaScriptLanuage(),
    // ...typeScriptLanuage(),
    // ...typescriptReactLanguage(),
    ...jsonLanguage(),
    ...cssLanguage(),
    ...htmlLanguage(),
    ...markdownLanguage(),
    ...yamlLanuage(),
    ...luaLanuage(),
    ...vueLanuage()
  ].map((f) => f())
}
