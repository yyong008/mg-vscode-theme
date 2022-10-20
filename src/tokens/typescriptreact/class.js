import colors from '../../designs/index.js'

const tsxClass = {
  name: 'tsx::class',
  scope: ['storage.type.class.tsx'],
  settings: {
    fontStyle: 'italic',
    foreground: colors.goldColors500
  }
}

const tsxClassEntity = {
  name: 'tsx::class::entity',
  scope: ['entity.name.type.class.tsx'],
  settings: {
    fontStyle: 'italic',
    foreground: colors.limeColors500
  }
}

const tsxThis = {
  name: 'tsx::this',
  scope: ['variable.language.this.tsx'],
  settings: {
    fontStyle: 'italic',
    foreground: colors.redColors600
  }
}

const tsxClassProps = {
  name: 'tsx::class::props',
  scope: ['variable.object.property.tsx'],
  settings: {
    fontStyle: 'bold',
    foreground: colors.blueColors400
  }
}

const tsxClassStatickeyWord = {
  name: 'tsx::class::static',
  scope: ['storage.modifier.tsx'],
  settings: {
    fontStyle: 'bold',
    foreground: colors.purpleColors400
  }
}

const tsxClassStaticProps = {
  name: 'tsx::class::static::props',
  scope: ['variable.object.property.tsx'],
  settings: {
    fontStyle: 'bold',
    foreground: colors.greenColors300
  }
}

const tsxInherited = {
  name: 'tsx::class::inherited',
  scope: ['entity.other.inherited-class.tsx'],
  settings: {
    foreground: colors.greenColors500
  }
}

export default [
  tsxClass,
  tsxClassEntity,
  tsxThis,
  tsxClassProps,
  tsxClassStatickeyWord,
  tsxClassStaticProps,
  tsxInherited
]
