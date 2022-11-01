const blueColors = {
  blueColors100: '#e6f7ff',
  blueColors200: '#bae7ff',
  blueColors300: '#91d5ff',
  blueColors400: '#69c0ff',
  blueColors500: '#40a9ff',
  blueColors600: '#1890ff',
  blueColors700: '#096dd9',
  blueColors800: '#0050b3',
  blueColors900: '#003a8c',
  blueColors1000: '#002766'
}

const geekBlueColors = {
  geekBlueColors100: '#f0f5ff',
  geekBlueColors200: '#d6e4ff',
  geekBlueColors300: '#adc6ff',
  geekBlueColors400: '#85a5ff',
  geekBlueColors500: '#597ef7',
  geekBlueColors600: '#2f54eb',
  geekBlueColors700: '#1d39c4',
  geekBlueColors800: '#10239e',
  geekBlueColors900: '#061178',
  geekBlueColors1000: '#030852'
}

const cyanColors = {
  cyanColors100: '#e6fffb',
  cyanColors200: '#b5f5ec',
  cyanColors300: '#87e8de',
  cyanColors400: '#5cdbd3',
  cyanColors500: '#36cfc9',
  cyanColors600: '#13c2c2',
  cyanColors700: '#08979c',
  cyanColors800: '#006d75',
  cyanColors900: '#00474f',
  cyanColors1000: '#002329'
}

const goldColors = {
  goldColors100: '#fffbe6',
  goldColors200: '#fff1b8',
  goldColors300: '#ffe58f',
  goldColors400: '#ffd666',
  goldColors500: '#ffc53d',
  goldColors600: '#faad14',
  goldColors700: '#d48806',
  goldColors800: '#ad6800',
  goldColors900: '#874d00',
  goldColors1000: '#613400'
}

const grayColors = {
  grayColors100: '#ffffff',
  grayColors200: '#fafafa',
  grayColors300: '#f5f5f5',
  grayColors400: '#f0f0f0',
  grayColors500: '#d9d9d9',
  grayColors600: '#bfbfbf',
  grayColors700: '#8c8c8c',
  grayColors800: '#595959',
  grayColors900: '#434343',
  grayColors1000: '#262626',
  grayColors1100: '#1f1f1f',
  grayColors1200: '#141414',
  grayColors1300: '#000000'
}

const greenColors = {
  greenColors100: '#f6ffed',
  greenColors200: '#d9f7be',
  greenColors300: '#b7eb8f',
  greenColors400: '#95de64',
  greenColors500: '#73d13d',
  greenColors600: '#52c41a',
  greenColors700: '#389e0d',
  greenColors800: '#237804',
  greenColors900: '#135200',
  greenColors1000: '#092b00'
}

const limeColors = {
  limeColors100: '#fcffe6',
  limeColors200: '#f4ffb8',
  limeColors300: '#eaff8f',
  limeColors400: '#d3f261',
  limeColors500: '#bae637',
  limeColors600: '#a0d911',
  limeColors700: '#7cb305',
  limeColors800: '#5b8c00',
  limeColors900: '#3f6600',
  limeColors1000: '#254000'
}

const magentaColors = {
  magentaColors100: '#fff0f6',
  magentaColors200: '#ffd6e7',
  magentaColors300: '#ffadd2',
  magentaColors400: '#ff85c0',
  magentaColors500: '#f759ab',
  magentaColors600: '#eb2f96',
  magentaColors700: '#c41d7f',
  magentaColors800: '#9e1068',
  magentaColors900: '#780650',
  magentaColors1000: '#520339'
}

const orangeColors = {
  orangeColors100: '#fff7e6',
  orangeColors200: '#ffe7ba',
  orangeColors300: '#ffd591',
  orangeColors400: '#ffc069',
  orangeColors500: '#ffa940',
  orangeColors600: '#fa8c16',
  orangeColors700: '#d46b08',
  orangeColors800: '#ad4e00',
  orangeColors900: '#873800',
  orangeColors1000: '#612500'
}

const purpleColors = {
  purpleColors100: '#f9f0ff',
  purpleColors200: '#efdbff',
  purpleColors300: '#d3adf7',
  purpleColors400: '#b37feb',
  purpleColors500: '#9254de',
  purpleColors600: '#722ed1',
  purpleColors700: '#531dab',
  purpleColors800: '#391085',
  purpleColors900: '#22075e',
  purpleColors1000: '#120338'
}

const redColors = {
  redColors100: '#fff1f0',
  redColors200: '#ffccc7',
  redColors300: '#ffa39e',
  redColors400: '#ff7875',
  redColors500: '#ff4d4f',
  redColors600: '#f5222d',
  redColors700: '#cf1322',
  redColors800: '#a8071a',
  redColors900: '#820014',
  redColors1000: '#5c0011'
}

const volcanoColors = {
  volcanoColors100: '#fff2e8',
  volcanoColors200: '#ffd8bf',
  volcanoColors300: '#ffbb96',
  volcanoColors400: '#ff9c6e',
  volcanoColors500: '#ff7a45',
  volcanoColors600: '#fa541c',
  volcanoColors700: '#d4380d',
  volcanoColors800: '#ad2102',
  volcanoColors900: '#871400',
  volcanoColors1000: '#610b00'
}

const yellowColors = {
  yellowColors100: '#feffe6',
  yellowColors200: '#ffffb8',
  yellowColors300: '#fffb8f',
  yellowColors400: '#fff566',
  yellowColors500: '#ffec3d',
  yellowColors600: '#fadb14',
  yellowColors700: '#d4b106',
  yellowColors800: '#ad8b00',
  yellowColors900: '#876800',
  yellowColors1000: '#614700'
}

const colors = {
  ...blueColors,
  ...geekBlueColors,
  ...cyanColors,
  ...goldColors,
  ...grayColors,
  ...greenColors,
  ...limeColors,
  ...magentaColors,
  ...orangeColors,
  ...purpleColors,
  ...redColors,
  ...volcanoColors,
  ...yellowColors
}

export default colors

const runtimeColor = {
  color: ''
}

export const setRuntimeColors = (color) => {
  runtimeColor.color = color
  return runtimeColor.color
}

export const getRuntimeColors = () => {
  return runtimeColor.color
}

export const mapColors = (color) => {
  return colors[color]
}
