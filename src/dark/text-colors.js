import colors from '../designs/index.js'

/**
 * @type {import('../types/TextBlockQuote').default}
 */
const textBlockQuote = {
  ['textBlockQuote.background']: '',
  ['textBlockQuote.border']: '',
  ['textCodeBlock.background']: ''
}

/**
 * @type {import('../types/TextBlockQuote').TextLink}
 */
const textLink = {
  ['textLink.activeForeground']: '',
  ['textLink.foreground']: ''
}

/**
 * @type {import('../types/TextBlockQuote').textPreformat}
 */
const textPreformat = {
  ['textPreformat.foreground']: ''
}

/**
 * @type {import('../types/TextBlockQuote').textSeparator}
 */
const textSeparator = {
  ['textSeparator.foreground']: ''
}

export default {
  ...textBlockQuote,
  ...textLink,
  ...textPreformat,
  ...textSeparator
}
