import windowBorderJson from './json/windowBorder.json' assert { type: 'json' }

export default function windowBorder() {
  return {
    ...windowBorderJson
  }
}
