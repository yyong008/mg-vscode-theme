import colors from '../../designs/index.js'

const jsClass = {
  name: 'js::class',
  scope: ['storage.type.class.js'],
  settings: {
    fontStyle: 'italic',
    foreground: colors.goldColors500
  }
}

const jsClassEntity = {
  name: 'js::class::entity',
  scope: ['entity.name.type.class.js'],
  settings: {
    fontStyle: 'italic',
    foreground: colors.limeColors500
  }
}

const jsThis = {
  name: 'js::this',
  scope: ['variable.language.this.js'],
  settings: {
    fontStyle: 'italic',
    foreground: colors.redColors600
  }
}

const jsClassProps = {
  name: 'js::class::props',
  scope: ['variable.object.property.js'],
  settings: {
    fontStyle: 'bold',
    foreground: colors.blueColors400
  }
}

const jsClassStatickeyWord = {
  name: 'js::class::static::name',
  scope: ['storage.modifier.js'],
  settings: {
    fontStyle: 'bold',
    foreground: colors.purpleColors400
  }
}

const jsClassStaticProps = {
  name: 'js::class::static::props',
  scope: ['variable.object.property.js'],
  settings: {
    fontStyle: 'bold',
    foreground: colors.greenColors300
  }
}

export default [
  jsClass,
  jsClassEntity,
  jsThis,
  jsClassProps,
  jsClassStatickeyWord,
  jsClassStaticProps
]
