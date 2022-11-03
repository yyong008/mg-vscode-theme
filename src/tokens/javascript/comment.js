import colors from '../../designs/index.js'

const commentScopes = {
  line: [
    'comment.line.double-slash.js',
    'comment.line.double-slash.ts',
    'comment.line.double-slash.jsx',
    'comment.line.double-slash.tsx'
  ],
  block: [
    'comment.block.js',
    'comment.block.documentation.js',
    'comment.block.ts',
    'comment.block.documentation.ts',
    'comment.block.jsx',
    'comment.block.documentation.jsx',
    'comment.block.tsx',
    'comment.block.documentation.tsx'
  ],
  punctuation: ['punctuation.definition.comment'],
  shebang: [
    'comment.line.shebang.js',
    'comment.line.shebang.ts',
    'comment.line.shebang.jsx',
    'comment.line.shebang.tsx'
  ]
}
const jsComment = () => ({
  name: 'js::comment',
  scope: [
    ...commentScopes.line,
    ...commentScopes.block,
    ...commentScopes.punctuation,
    ...commentScopes.shebang
  ],
  settings: {
    foreground: colors.grayColors800
  }
})

export default [jsComment]
