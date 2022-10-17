import editorJson from './json/editor.json'

export default function SnippetsColors() {
  const {
    snippetTabstopHighlightBackground,
    snippetTabstopHighlightBorder,
    snippetFinalTabstopHighlightBackground,
    snippetFinalTabstopHighlightBorder
  } = editorJson

  return {
    snippetTabstopHighlightBackground,
    snippetTabstopHighlightBorder,
    snippetFinalTabstopHighlightBackground,
    snippetFinalTabstopHighlightBorder
  }
}
