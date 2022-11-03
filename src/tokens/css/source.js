import { mapColors, getRuntimeColors } from '../../designs/index.js'

const sourceScopes = {
  css: ['source.css'],
  less: ['source.less'],
  scss: ['source.scss'],
  stylus: ['source.stylus']
}

const source = () => ({
  name: 'base::source',
  scope: [
    ...sourceScopes.css,
    ...sourceScopes.less,
    ...sourceScopes.scss,
    ...sourceScopes.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}400`)}`
  }
})

export default [source]
