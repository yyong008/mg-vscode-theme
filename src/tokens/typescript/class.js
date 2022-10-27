import colors from '../../designs/index.js'

const tsClass = {
  name: 'ts::class',
  scope: ['storage.type.class.ts'],
  settings: {
    foreground: colors.purpleColors400
  }
}

const tsClassEntity = {
  name: 'ts::class::entity',
  scope: ['entity.name.type.class.ts'],
  settings: {
    foreground: colors.cyanColors600
  }
}

const tsThis = {
  name: 'ts::this',
  scope: ['variable.language.this.ts'],
  settings: {
    foreground: colors.volcanoColors600
  }
}

const tsClassProps = {
  name: 'ts::class::props',
  scope: ['variable.object.property.ts'],
  settings: {
    fontStyle: 'bold',
    foreground: colors.cyanColors400
  }
}

const tsClassStatickeyWord = {
  name: 'ts::class::static',
  scope: ['storage.modifier.ts'],
  settings: {
    fontStyle: 'bold',
    foreground: colors.purpleColors400
  }
}

const tsClassStaticProps = {
  name: 'ts::class::static::props',
  scope: ['variable.object.property.ts'],
  settings: {
    fontStyle: 'bold',
    foreground: colors.cyanColors200
  }
}

const tsInherited = {
  name: 'ts::inherited',
  scope: ['entity.other.inherited-class.ts'],
  settings: {
    foreground: colors.cyanColors300
  }
}

export default [
  tsClass,
  tsClassEntity,
  tsThis,
  tsClassProps,
  tsClassStatickeyWord,
  tsClassStaticProps,
  tsInherited
]
