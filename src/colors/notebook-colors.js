import notebookJson from './json/notebook.json'
import notebookScrollbarSliderJson from './json/notebookScrollbarSlider.json'
import notebookStatusErrorIconJson from './json/notebookStatusErrorIcon.json'
import notebookStatusRunningIconJson from './json/notebookStatusRunningIcon.json'
import notebookStatusSuccessIconJson from './json/notebookStatusSuccessIcon.json'

export default function notebook() {
  return {
    ...notebookJson,
    ...notebookScrollbarSliderJson,
    ...notebookStatusErrorIconJson,
    ...notebookStatusRunningIconJson,
    ...notebookStatusSuccessIconJson
  }
}
