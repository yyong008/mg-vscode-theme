export interface Merge {
  currentHeaderBackground: string
  currentContentBackground: string
  incomingHeaderBackground: string
  incomingContentBackground: string
  border: string
  commonContentBackground: string
  commonHeaderBackground: string
}

export interface MergeEditor {
  change: {
    background: string
    word: {
      background: string
    }
  }
  conflict: {
    unhandledFocused: {
      border: string
    }
    handledUnfocused: {
      border: string
    }
    handledFocused: {
      border: string
    }
    handled: {
      minimapOverViewRuler: string
    }
    unhandled: {
      minimapOverViewRuler: string
    }
  }
  conflictingLines: {
    background: string
  }
}
