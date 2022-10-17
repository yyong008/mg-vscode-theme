import pickerGroupJson from './json/pickerGroup.json'
import quickInputJson from './json/quickInput.json'
import quickInputListJson from './json/quickInputList.json'
import quickInputTitleJson from './json/quickInputTitle.json'

export default () => {
  return {
    ...pickerGroupJson,
    ...quickInputJson,
    ...quickInputListJson,
    ...quickInputTitleJson
  }
}
