/* eslint-disable @typescript-eslint/ban-types */
export default interface Editor {
  background: string
  foreground: string
  selectionBackground: string
  selectionForeground: string
  inactiveSelectionBackground: string
  selectionHighlightBackground: string
  selectionHighlightBorder: string
  wordHighlightBackground: string
  wordHighlightBorder: string
  wordHighlightStrongBackground: string
  wordHighlightStrongBorder: string
  findMatchBackground: string
  findMatchHighlightBackground: string
  findRangeHighlightBackground: string
  findMatchBorder: string
  findMatchHighlightBorder: string
  findRangeHighlightBorder: string
  hoverHighlightBackground: string
  lineHighlightBackground: string
  lineHighlightBorder: string
  rangeHighlightBackground: string
  rangeHighlightBorder: string
  symbolHighlightBackground: string
  symbolHighlightBorder: string
  guides: {
    indentation: boolean
    highlightActiveIndentation: boolean
  }
  inlineSuggest: {
    enabled: boolean
  }
  rulers: {}
  linkedEditingBackground: string
  foldBackground: string
  stackFrameHighlightBackground: string
  focusedStackFrameHighlightBackground: string // debug
  inlineValuesForeground: string
  inlineValuesBackground: string
  snippetTabstopHighlightBackground: string
  snippetTabstopHighlightBorder: string
  snippetFinalTabstopHighlightBackground: string
  snippetFinalTabstopHighlightBorder: string
}

export interface EditorDebug {
  focusedStackFrameHighlightBackground: string // debug
  inlineValuesForeground: string
  inlineValuesBackground: string
}

export interface EditorBracketHighlight {
  foreground1: string
  foreground2: string
  foreground3: string
  foreground4: string
  foreground5: string
  foreground6: string
  unexpectedBracket: {
    foreground: string
  }
}

export interface EditorBracketMatch {
  background: string
  border: string
}

export interface EditorBracketPairGuide {
  activeBackground1: string
  activeBackground2: string
  activeBackground3: string
  activeBackground4: string
  activeBackground5: string
  activeBackground6: string
  background1: string
  background2: string
  background3: string
  background4: string
  background5: string
  background6: string
}

export interface EditorCodeLens {
  foreground: string
}

export interface EditorCommentsWidget {
  resolvedBorder: string
  unresolvedBorder: string
  rangeBackground: string
  rangeBorder: string
  rangeActiveBackground: string
  rangeActiveBorder: string
}

export interface EditorCursor {
  background: string
  foreground: string
}

export interface EditorError {
  foreground: string
  border: string
  background: string
}

export interface EditorGhostText {
  border: string
  background: string
  foreground: string
}

export interface EditorGroup {
  border: string
  dropBackground: string
  emptyBackground: string
  focusedEmptyBorder: string
  dropIntoPromptForeground: string
  dropIntoPromptBackground: string
  dropIntoPromptBorder: string
}

export interface EditorGroupHeader {
  noTabsBackground: string
  tabsBackground: string
  tabsBorder: string
  border: string
}

export interface EditorGutter {
  background: string
  modifiedBackground: string
  addedBackground: string
  deletedBackground: string
  commentRangeForeground: string
  foldingControlForeground: string
}

export interface EditorHint {
  foreground: string
  border: string
}

export interface EditorHoverWidget {
  foreground: string
  background: string
  border: string
  highlightForeground: string
  statusBarBackground: string
}

export interface EditorIndentGuide {
  background: string
  activeBackground: string
}

export interface EditorInfo {
  foreground: string
  border: string
  background: string
}

export interface EditorInlayHint {
  background: string
  foreground: string
  typeForeground: string
  typeBackground: string
  parameterForeground: string
  parameterBackground: string
}

export interface EditorLightBulb {
  foreground: string
}

export interface EditorLightBulbAutoFix {
  foreground: string
}

export interface EditorLineNumber {
  foreground: string
  activeForeground: string
}

export interface EditorLink {
  activeForeground: string
}

export interface EditorMarkerNavigation {
  background: string
}

export interface EditorMarkerNavigationError {
  background: string
}

//
export interface EditorMarkerNavigationInfo {
  background: string
}

export interface EditorMarkerNavigationWarning {
  background: string
}

export interface EditorOverviewRuler {
  background: string
  border: string
  findMatchForeground: string
  rangeHighlightForeground: string
  selectionHighlightForeground: string
  wordHighlightForeground: string
  wordHighlightStrongForeground: string
  modifiedForeground: string
  addedForeground: string
  deletedForeground: string
  errorForeground: string
  warningForeground: string
  infoForeground: string
  bracketMatchForeground: string
  currentContentForeground: string
  incomingContentForeground: string
  commonContentForeground: string
}

export interface EditorPane {
  background: string
}

export interface EditorRuler {
  background: string
}

export interface EditorStickyScroll {
  background: string
}

export interface EditorStickyScrollHover {
  background: string
}

export interface EditorSuggestWidget {
  background: string
  border: string
  foreground: string
  focusHighlightForeground: string
  highlightForeground: string
  selectedBackground: string
  selectedForeground: string
  selectedIconForeground: string
}

export interface EditorSuggestWidgetStatus {
  foreground: string
}

export interface EditorUnicodeHighlight {
  border: string
  background: string
}

export interface EditorUnnecessaryCode {
  border: string
  opacity: string
}

export interface EditorWarning {
  foreground: string
  border: string
  background: string
}

export interface EditorWhitespace {
  foreground: string
}

export interface EditorWidget {
  foreground: string
  background: string
  border: string
  resizeBorder: string
}
