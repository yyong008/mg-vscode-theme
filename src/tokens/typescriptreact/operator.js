import colors from '../../designs/index.js'

const tsxOperator = {
  name: 'tsx::operator',
  scope: [
    'keyword.operator.assignment.tsx',
    'keyword.operator.comparison.tsx',
    'keyword.operator.logical.tsx',
    'keyword.operator.arithmetic.tsx',
    'keyword.operator.expression.typeof.tsx',
    'keyword.operator.expression.instanceof.tsx',
    'keyword.operator.increment.tsx',
    'keyword.operator.decrement.tsx',
    'keyword.operator.relational.tsx',
    'keyword.operator.expression.delete.tsx',
    'keyword.operator.new.tsx',
    'keyword.operator.bitwise.tsx',
    'keyword.operator.bitwise.shift.tsx',
    'keyword.operator.spread.tsx',
    'keyword.operator.ternary.tsx',
    'keyword.operator.assignment.compound.tsx',
    'keyword.operator.assignment.compound.bitwise.tsx',
    'keyword.operator.expression.in.tsx',
    'keyword.operator.expression.void.tsx',
    'punctuation.accessor.optional.tsx',
    'punctuation.separator.comma.tsx',
    'keyword.generator.asterisk.tsx',
    'keyword.control.as.tsx',
    'keyword.control.switch.tsx',
    'keyword.control.switch.tsx',
    'storage.type.property.tsx',
    'keyword.operator.optional.tsx',
    'keyword.operator.type.annotation.tsx',
    'keyword.operator.type.tsx',
    'keyword.control.trycatch.ts'
  ],
  settings: {
    foreground: colors.magentaColors600,
    fontStyle: 'bold'
  }
}

export default [tsxOperator]
