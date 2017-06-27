const hyphenateRE = /([^-])([A-Z])/g
export const hyphenate = str => str
  .replace(hyphenateRE, '$1-$2')
  .replace(hyphenateRE, '$1-$2')
  .toLowerCase()
