import fs from 'node:fs/promises'
import { genThemePath } from './utils/index.js'

import createThemeColors from './dark/index.js'
import createColorTokens from './tokens/index.js'

export default async function run() {
  await createLight()
  await createDark()
  await createLightConstrast()
  await createDarkConstrast()
}

export async function createDark() {
  const theme = {
    name: 'iNature Dark',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }

  await fs.writeFile(
    genThemePath('dark'),
    JSON.stringify(theme, null, 2),
    'utf8'
  )
}

export async function createLight() {
  const theme = {
    name: 'iNature light',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }

  await fs.writeFile(
    genThemePath('light'),
    JSON.stringify(theme, null, 2),
    'utf8'
  )
}

export async function createLightConstrast() {
  const theme = {
    name: 'iNature Light Constrast',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }

  await fs.writeFile(
    genThemePath('light-constrast'),
    JSON.stringify(theme, null, 2),
    'utf8'
  )
}

export async function createDarkConstrast() {
  const theme = {
    name: 'iNature Dark Constrast',
    semanticHighlighting: false,
    colors: await createThemeColors(),
    tokenColors: createColorTokens()
  }

  await fs.writeFile(
    genThemePath('dark-constrast'),
    JSON.stringify(theme, null, 2),
    'utf8'
  )
}
