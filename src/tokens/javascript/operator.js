import colors from '../../designs/index.js'

const operatorScopes = {
  js: [
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
    'keyword.operator.ternary.js',
    'keyword.operator.assignment.compound.js',
    'keyword.operator.assignment.compound.bitwise.js',
    'keyword.operator.expression.in.js',
    'keyword.operator.expression.void.js',
    'punctuation.accessor.optional.js',
    'keyword.generator.asterisk.js',
    'keyword.control.as.js',
    'keyword.control.switch.js'
  ],
  ts: [
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
    'keyword.generator.asterisk.ts',
    'keyword.control.as.ts',
    'keyword.control.switch.ts'
  ],
  jsx: [
    'keyword.operator.assignment.jsx',
    'keyword.operator.comparison.jsx',
    'keyword.operator.logical.jsx',
    'keyword.operator.arithmetic.jsx',
    'keyword.operator.expression.typeof.jsx',
    'keyword.operator.expression.instanceof.jsx',
    'keyword.operator.increment.jsx',
    'keyword.operator.decrement.jsx',
    'keyword.operator.relational.jsx',
    'keyword.operator.expression.delete.jsx',
    'keyword.operator.new.jsx',
    'keyword.operator.bitwise.jsx',
    'keyword.operator.bitwise.shift.jsx',
    'keyword.operator.spread.jsx',
    'keyword.operator.ternary.jsx',
    'keyword.operator.assignment.compound.jsx',
    'keyword.operator.assignment.compound.bitwise.jsx',
    'keyword.operator.expression.in.jsx',
    'keyword.operator.expression.void.jsx',
    'punctuation.accessor.optional.jsx',
    'keyword.generator.asterisk.jsx',
    'keyword.control.as.jsx',
    'keyword.control.switch.jsx'
  ],
  tsx: [
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
    'keyword.generator.asterisk.tsx',
    'keyword.control.as.tsx',
    'keyword.control.switch.tsx'
  ]
}
const jsOperator = () => ({
  name: 'js::operator',
  scope: [
    ...operatorScopes.js,
    ...operatorScopes.jsx,
    ...operatorScopes.ts,
    ...operatorScopes.tsx
  ],
  settings: {
    foreground: colors.magentaColors600,
    fontStyle: 'bold'
  }
})

export default [jsOperator]
