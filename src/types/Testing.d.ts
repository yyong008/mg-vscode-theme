export default interface Testing {
  iconFailed: string
  iconErrored: string
  iconPassed: string
  runAction: string
  iconQueued: string
  iconUnset: string
  iconSkipped: string
  peekBorder: string
  peekHeaderBackground: string
  message: {
    error: {
      decorationForeground: string
      lineBackground: string
    }
    info: {
      decorationForeground: string
      lineBackground: string
    }
  }
}
