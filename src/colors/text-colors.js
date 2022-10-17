import textBlockQuote from './json/textBlockQuote.json' assert { type: 'json' }
import textCodeBlock from './json/textCodeBlock.json' assert { type: 'json' }
import textLink from './json/textLink.json' assert { type: 'json' }
import textPreformat from './json/textPreformat.json' assert { type: 'json' }
import textSeparator from './json/textSeparator.json' assert { type: 'json' }

export default function textColor() {
  return {
    ...textBlockQuote,
    ...textCodeBlock,
    ...textLink,
    ...textPreformat,
    ...textSeparator
  }
}
