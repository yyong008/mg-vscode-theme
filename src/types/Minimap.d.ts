export interface Minimap {
  findMatchHighlight: string
  selectionHighlight: string
  errorHighlight: string
  warningHighlight: string
  background: string
  selectionOccurrenceHighlight: string
  foregroundOpacity: string
}

export interface MinimapGutter {
  addedBackground: string
  modifiedBackground: string
  deletedBackground: string
}

export interface minimapSlider {
  background: string
  hoverBackground: string
  activeBackground: string
}
