import { getRuntimeColors, mapColors } from '../../designs/index.js'

const logicScopes = {
  css: ['keyword.operator.logical.css'],
  less: ['keyword.operator.logical.less'],
  scss: ['keyword.operator.logical.scss'],
  stylus: ['keyword.operator.logical.styl']
}

const operatorScopes = {
  css: ['keyword.operator.css'],
  less: ['keyword.operator.less'],
  scss: ['keyword.operator.scss'],
  stylus: ['keyword.operator.styl']
}

const importantScopes = {
  css: ['keyword.other.important.css'],
  less: ['keyword.other.important.less'],
  scss: ['keyword.other.important.scss'],
  stylus: ['keyword.other.important.styl']
}

const combinatorScopes = {
  css: ['keyword.operator.combinator.css'],
  less: ['keyword.operator.combinator.less'],
  scss: ['keyword.operator.combinator.scss'],
  stylus: ['keyword.operator.combinator.styl']
}

const operator = () => ({
  name: 'style::operator',
  scope: [
    ...logicScopes.css,
    ...logicScopes.less,
    ...logicScopes.scss,
    ...logicScopes.stylus,
    ...operatorScopes.css,
    ...operatorScopes.less,
    ...operatorScopes.scss,
    ...operatorScopes.stylus,
    ...importantScopes.css,
    ...importantScopes.less,
    ...importantScopes.scss,
    ...importantScopes.stylus,
    ...combinatorScopes.css,
    ...combinatorScopes.less,
    ...combinatorScopes.scss,
    ...combinatorScopes.stylus
  ],
  settings: {
    foreground: `${mapColors(`${getRuntimeColors()}400`)}`
  }
})

export default [operator]
