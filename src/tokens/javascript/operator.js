// string.template.js
import colors from '../../designs/index.js'

const jsOperator = {
  name: 'js::operator',
  scope: [
    'keyword.operator.assignment.js',
    'keyword.operator.comparison.js',
    'keyword.operator.logical.js',
    'keyword.operator.arithmetic.js',
    'keyword.operator.expression.typeof.js',
    'keyword.operator.expression.instanceof.js',
    'keyword.operator.increment.js',
    'keyword.operator.decrement.js',
    'keyword.operator.relational.js',
    'keyword.operator.expression.delete.js',
    'keyword.operator.new.js',
    'keyword.operator.bitwise.js',
    'keyword.operator.bitwise.shift.js',
    'keyword.operator.spread.js',
    'keyword.operator.ternary.js', // TODO
    'keyword.operator.assignment.compound.js',
    'keyword.operator.assignment.compound.bitwise.js',
    'keyword.operator.expression.in.js',
    'keyword.operator.expression.void.js',
    'punctuation.accessor.optional.js',
    'punctuation.separator.comma.js',
    'keyword.generator.asterisk.js',
    'keyword.control.as.js',
    'keyword.control.switch.ts',
    'keyword.control.switch.ts'
  ],
  settings: {
    foreground: colors.magentaColors600,
    fontStyle: 'bold'
  }
}

export default [jsOperator]
