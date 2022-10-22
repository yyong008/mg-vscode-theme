import colors from '../designs/index.js'

const input = {
  ['input.background']: colors.grayColors1000,
  ['inputOption.activeBorder']: colors.limeColors500,
  ['inputValidation.errorBackground']: '#90274A', // middle of #272822 and #f92672
  ['inputValidation.errorBorder']: '#f92672',
  ['inputValidation.warningBackground']: '#848528', // middle of #272822 and #e2e22e
  ['inputValidation.warningBorder']: '#e2e22e',
  ['inputValidation.infoBackground']: '#546190', // middle of #272822 and #819aff
  ['inputValidation.infoBorder']: '#819aff'
}

export default { ...input }
