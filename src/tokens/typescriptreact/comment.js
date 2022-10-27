import colors from '../../designs/index.js'

const tsxComment = {
  name: 'tsx::comment',
  scope: [
    'punctuation.definition.comment',
    //tsx
    'punctuation.definition.comment.tsx',
    'comment.block.documentation.tsx',
    'comment.line.double-slash.tsx',
    'comment.block.tsx',
    'comment.line.shebang.tsx',
    // jsx
    'punctuation.definition.comment.jsx',
    'comment.block.documentation.jsx',
    'comment.line.double-slash.jsx',
    'comment.block.jsx',
    'comment.line.shebang.jsx'
  ],
  settings: {
    foreground: colors.grayColors800
  }
}

export default [tsxComment]
