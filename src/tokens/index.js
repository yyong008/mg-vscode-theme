// import { setRuntimeColors } from '../designs/index.js'

import javaScriptLanuage from './javascript/index.js'
import jsonLanguage from './json/index.js'
import cssLanguage from './css/index.js'
import htmlLanguage from './html/index.js'
import markdownLanguage from './markdown/index.js'
import yamlLanuage from './yaml/index.js'
import luaLanuage from './lua/index.js'
import vueLanuage from './vue/index.js'
import docker from './docker/index.js'
import rust from './rust/index.js'
import toml from './toml/index.js'

export default function createColorTokens() {
  return [
    ...javaScriptLanuage(),
    ...jsonLanguage(),
    ...cssLanguage(),
    ...htmlLanguage(),
    ...markdownLanguage(),
    ...yamlLanuage(),
    ...luaLanuage(),
    ...vueLanuage(),
    ...docker(),
    ...rust(),
    ...toml()
  ].map((f) => f())
}
