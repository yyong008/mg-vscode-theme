// import gulp from 'gulp'
import fs from 'node:fs/promises'
import start from './src/index.js'

export default async () => {
  const theme = await start()
  await fs.writeFile(
    './themes/iNature-color-theme.json',
    JSON.stringify(theme, null, 2),
    'utf8'
  )
}
