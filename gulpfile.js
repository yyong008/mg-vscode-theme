import fs from 'node:fs/promises'

import start from './src/index.js'

export default async () => {
  const themePath = './themes/iNature-color-theme.json'

  const theme = await start()
  await fs.writeFile(themePath, JSON.stringify(theme, null, 2), 'utf8')
}
