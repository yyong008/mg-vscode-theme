import index from './colors/index.js'
import createColorTokens from './tokens/index.js'

export default async function start() {
  return {
    name: 'iNature',
    semanticHighlighting: false,
    colors: index().colors,
    tokenColors: createColorTokens()
  }
}
