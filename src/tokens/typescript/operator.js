// string.template.ts
import colors from '../../designs/index.js'

const tsOperator = {
  name: 'ts::operator',
  scope: [
    'keyword.operator.assignment.ts',
    'keyword.operator.comparison.ts',
    'keyword.operator.logical.ts',
    'keyword.operator.arithmetic.ts',
    'keyword.operator.expression.typeof.ts',
    'keyword.operator.expression.instanceof.ts',
    'keyword.operator.increment.ts',
    'keyword.operator.decrement.ts',
    'keyword.operator.relational.ts',
    'keyword.operator.expression.delete.ts',
    'keyword.operator.new.ts',
    'keyword.operator.bitwise.ts',
    'keyword.operator.bitwise.shift.ts',
    'keyword.operator.spread.ts',
    'keyword.operator.ternary.ts',
    'keyword.operator.assignment.compound.ts',
    'keyword.operator.assignment.compound.bitwise.ts',
    'keyword.operator.expression.in.ts',
    'keyword.operator.expression.void.ts',
    'punctuation.accessor.optional.ts',
    'punctuation.separator.comma.ts',
    'keyword.generator.asterisk.ts',
    'keyword.control.as.ts',
    'keyword.control.switch.ts',
    'keyword.control.switch.ts',
    'storage.type.property.ts',
    'keyword.operator.optional.ts',
    'keyword.operator.type.annotation.ts',
    'keyword.operator.type.ts'
  ],
  settings: {
    foreground: colors.magentaColors600,
    fontStyle: 'bold'
  }
}

export default [tsOperator]
