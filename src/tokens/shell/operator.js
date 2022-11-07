import colors from '../../designs/index.js'

const shellOperator = () => ({
  name: 'shell::operator',
  scope: [
    'keyword.operator.assignment.shell',
    'keyword.operator.comparison.shell',
    'keyword.operator.logical.shell',
    'keyword.operator.arithmetic.shell',
    'keyword.operator.expression.typeof.shell',
    'keyword.operator.expression.instanceof.shell',
    'keyword.operator.increment.shell',
    'keyword.operator.decrement.shell',
    'keyword.operator.relational.shell',
    'keyword.operator.expression.delete.shell',
    'keyword.operator.new.shell',
    'keyword.operator.bitwise.shell',
    'keyword.operator.bitwise.shift.shell',
    'keyword.operator.spread.shell',
    'keyword.operator.ternary.shell',
    'keyword.operator.assignment.compound.shell',
    'keyword.operator.assignment.compound.bitwise.shell',
    'keyword.operator.expression.in.shell',
    'keyword.operator.expression.void.shell',
    'punctuation.accessor.optional.shell',
    'keyword.generator.asterisk.shell',
    'keyword.control.as.shell',
    'keyword.control.switch.shell',
    'keyword.control.shell',
    'meta.scope.if-block.shell'
  ],
  settings: {
    foreground: colors.magentaColors800,
    fontStyle: 'bold italic'
  }
})

export default [shellOperator]
