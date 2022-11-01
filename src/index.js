import fs from 'node:fs/promises'
import { genThemePath } from './utils/index.js'

import createThemeColors from './dark/index.js'
import createColorTokens from './tokens/index.js'

import { setRuntimeColors } from './designs/index.js'

const themeDarkBlue = async () => {
  setRuntimeColors('blueColors')
  return {
    name: 'iNatureDarkBlue',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkGeekBlue = async () => {
  setRuntimeColors('geekBlueColors')
  return {
    name: 'iNatureDarkGeekBlue',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkCyan = async () => {
  setRuntimeColors('cyanColors')
  return {
    name: 'iNatureDarkCyan',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkGold = async () => {
  setRuntimeColors('goldColors')
  return {
    name: 'iNatureDarkGold',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkGreen = async () => {
  setRuntimeColors('greenColors')
  return {
    name: 'iNatureDarkGreen',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkLime = async () => {
  setRuntimeColors('limeColors')
  return {
    name: 'iNatureDarkLime',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkMagenta = async () => {
  setRuntimeColors('magentaColors')
  return {
    name: 'iNatureDarkMagenta',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkOrange = async () => {
  setRuntimeColors('orangeColors')
  return {
    name: 'iNatureDarkOrgane',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkPurple = async () => {
  setRuntimeColors('purpleColors')
  return {
    name: 'iNatureDarkPurple',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkRed = async () => {
  setRuntimeColors('redColors')
  return {
    name: 'iNatureDarkRed',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkVolcano = async () => {
  setRuntimeColors('volcanoColors')
  return {
    name: 'iNatureDarkVolcano',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

const themeDarkYellow = async () => {
  setRuntimeColors('yellowColors')
  return {
    name: 'iNatureDarkYellow',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }
}

export default async function run() {
  await createTheme(themeDarkCyan)
  await createTheme(themeDarkBlue)
  await createTheme(themeDarkGeekBlue)
  await createTheme(themeDarkGold)
  await createTheme(themeDarkGreen)
  await createTheme(themeDarkLime)
  await createTheme(themeDarkMagenta)
  await createTheme(themeDarkOrange)
  await createTheme(themeDarkPurple)
  await createTheme(themeDarkRed)
  await createTheme(themeDarkVolcano)
  await createTheme(themeDarkYellow)
}

export async function createTheme(createThemeFn) {
  const theme = await createThemeFn()

  await fs.writeFile(
    genThemePath(theme.name),
    JSON.stringify(theme, null, 2),
    'utf8'
  )
}
