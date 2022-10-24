import fs from 'node:fs/promises'
import { genThemePath } from './utils/index.js'

import createThemeColors from './dark/index.js'
import createColorTokens from './tokens/index.js'

const themeDark = {
  name: 'iNatureDark',
  semanticHighlighting: false,
  colors: await createThemeColors(),
  tokenColors: createColorTokens()
}

const themeLight = {
  name: 'iNatureLight',
  semanticHighlighting: false,
  colors: await createThemeColors(),
  tokenColors: createColorTokens()
}

const themeDarkConstrast = {
  name: 'iNatureDarkConstrast',
  semanticHighlighting: false,
  colors: await createThemeColors(),
  tokenColors: createColorTokens()
}

const themeLightConstrast = {
  name: 'iNatureLightConstrast',
  semanticHighlighting: false,
  colors: await createThemeColors(),
  tokenColors: createColorTokens()
}

export default async function run() {
  await createTheme(themeLight)
  await createTheme(themeDark)
  await createTheme(themeDarkConstrast)
  await createTheme(themeLightConstrast)
}

export async function createTheme(theme) {
  await fs.writeFile(
    genThemePath(theme.name),
    JSON.stringify(theme, null, 2),
    'utf8'
  )
}
