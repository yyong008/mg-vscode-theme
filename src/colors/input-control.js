import inputJson from './json/input.json'
import inputOption from './json/inputOption.json'
import inputValidation from './json/inputValidation.json'

export default function inputControl() {
  return {
    ...inputJson,
    ...inputOption,
    ...inputValidation
  }
}
