import heading from './heading.js'
import comment from './comment.js'
import order from './order.js'
import bold from './bold.js'
import link from './link.js'
import punctuation from './punctuation.js'

export default function markdownLanguage() {
  return [...heading, ...comment, ...order, ...bold, ...link, ...punctuation]
}
