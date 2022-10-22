export function removeNullStrAttr(obj) {
  for (let k in obj) {
    if (obj[k] === '') {
      delete obj[k]
    }
  }

  return obj
}

export function genThemePath(theme) {
  return `./themes/iNature-color-theme-${theme}.json`
}
