export interface diffEditor {
  insertedTextBackground: string
  insertedTextBorder: string
  removedTextBackground: string
  removedTextBorder: string
  border: string
  diagonalFill: string
  insertedLineBackground: string
  removedLineBackground: string
}

export interface diffEditorGutter {
  insertedLineBackground: string
  removedLineBackground: string
}

export interface diffEditorOverview {
  insertedForeground: string
  removedForeground: string
}
