export interface Terminal {
  background: string
  border: string
  foreground: string
  ansiBlack: string
  ansiBlue: string
  ansiBrightBlack: string
  ansiBrightBlue: string
  ansiBrightCyan: string
  ansiBrightGreen: string
  ansiBrightMagenta: string
  ansiBrightRed: string
  ansiBrightWhite: string
  ansiBrightYellow: string
  ansiCyan: string
  ansiGreen: string
  ansiMagenta: string
  ansiRed: string
  ansiWhite: string
  ansiYellow: string
  selectionBackground: string
  selectionForeground: string
  inactiveSelectionBackground: string
  findMatchBackground: string
  findMatchBorder: string
  findMatchHighlightBackground: string
  findMatchHighlightBorder: string
  dropBackground: string
  tab: {
    activeBorder: string
  }
}

export interface TerminalCommandDecoration {
  defaultBackground: string
  successBackground: string
  errorBackground: string
}

export interface TerminalCursor {
  foreground: string
}

export interface TerminalOverviewRuler {
  cursorForeground: string
  findMatchForeground: string
}
