import colors, { mapColors, getRuntimeColors } from '../../designs/index.js'

const classKeyScope = {
  js: ['storage.type.class.js'],
  ts: ['storage.type.class.ts'],
  jsx: ['storage.type.class.jsx'],
  tsx: ['storage.type.class.tsx']
}

const classNameScopes = {
  js: ['entity.name.type.class.js'],
  ts: ['entity.name.type.class.ts'],
  jsx: ['entity.name.type.class.jsx'],
  tsx: ['entity.name.type.class.tsx']
}

const thisKeywordScopes = {
  js: ['variable.language.this.js'],
  ts: ['variable.language.this.ts'],
  jsx: ['variable.language.this.jsx'],
  tsx: ['variable.language.this.ts']
}

const classPropertyScopes = {
  js: ['variable.object.property.js'],
  ts: ['variable.object.property.ts'],
  jsx: ['variable.object.property.jsx'],
  tsx: ['variable.object.property.tsx']
}

const modifierScopes = {
  js: ['storage.modifier.js'],
  ts: ['storage.modifier.ts'],
  jsx: ['storage.modifier.jsx'],
  tsx: ['storage.modifier.tsx']
}

const propertyScopes = {
  js: ['variable.object.property.js'],
  ts: ['variable.object.property.ts'],
  jsx: ['variable.object.property.jsx'],
  tsx: ['variable.object.property.tsx']
}

const jsClass = () => ({
  name: 'js::class',
  scope: [
    ...classKeyScope.js,
    ...classKeyScope.jsx,
    ...classKeyScope.ts,
    ...classKeyScope.tsx
  ],
  settings: {
    foreground: colors.purpleColors400
  }
})

const jsClassEntity = () => ({
  name: 'js::class::entity',
  scope: [
    ...classNameScopes.js,
    ...classNameScopes.jsx,
    ...classNameScopes.ts,
    ...classNameScopes.tsx
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}600`)}`
  }
})

const jsThis = () => ({
  name: 'js::this',
  scope: [
    ...thisKeywordScopes.js,
    ...thisKeywordScopes.jsx,
    ...thisKeywordScopes.ts,
    ...thisKeywordScopes.tsx
  ],
  settings: {
    foreground: colors.volcanoColors600
  }
})

const jsClassProps = () => ({
  name: 'js::class::props',
  scope: [
    ...classPropertyScopes.js,
    ...classPropertyScopes.jsx,
    ...classPropertyScopes.ts,
    ...classPropertyScopes.tsx
  ],
  settings: {
    fontStyle: 'bold',
    foreground: colors.blueColors400
  }
})

const jsClassStatickeyWord = () => ({
  name: 'js::class::static::name',
  scope: [
    ...modifierScopes.js,
    ...modifierScopes.jsx,
    ...modifierScopes.ts,
    ...modifierScopes.tsx
  ],
  settings: {
    fontStyle: 'bold',
    foreground: `${mapColors(`${getRuntimeColors()}400`)}`
  }
})

const jsClassStaticProps = () => ({
  name: 'js::class::static::props',
  scope: [
    ...propertyScopes.js,
    ...propertyScopes.jsx,
    ...propertyScopes.ts,
    ...propertyScopes.tsx
  ],
  settings: {
    fontStyle: 'bold',
    foreground: `${mapColors(`${getRuntimeColors()}300`)}`
  }
})

export default [
  jsClass,
  jsClassEntity,
  jsThis,
  jsClassProps,
  jsClassStatickeyWord,
  jsClassStaticProps
]
