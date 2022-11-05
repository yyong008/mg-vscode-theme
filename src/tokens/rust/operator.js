import { mapColorsReverse, getRuntimeColors } from '../../designs/index.js'

const rustOperator = () => ({
  name: 'rust::operator',
  scope: [
    'keyword.operator.assignment.rust',
    'keyword.operator.comparison.rust',
    'keyword.operator.logical.rust',
    'keyword.operator.arithmetic.rust',
    'keyword.operator.expression.typeof.rust',
    'keyword.operator.expression.instanceof.rust',
    'keyword.operator.increment.rust',
    'keyword.operator.decrement.rust',
    'keyword.operator.relational.rust',
    'keyword.operator.expression.delete.rust',
    'keyword.operator.new.rust',
    'keyword.operator.bitwise.rust',
    'keyword.operator.bitwise.shift.rust',
    'keyword.operator.spread.rust',
    'keyword.operator.ternary.rust',
    'keyword.operator.assignment.compound.rust',
    'keyword.operator.assignment.compound.bitwise.rust',
    'keyword.operator.expression.in.rust',
    'keyword.operator.expression.void.rust',
    'punctuation.accessor.optional.rust',
    'keyword.generator.asterisk.rust',
    'keyword.control.as.rust',
    'keyword.control.switch.rust'
  ],
  settings: {
    foreground: `${mapColorsReverse(`${getRuntimeColors()}500`)}`,
    fontStyle: 'bold'
  }
})

export default [rustOperator]
