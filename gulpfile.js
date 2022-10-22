import gulp from 'gulp'

import run from './src/index.js'

async function main() {
  await run()
  gulp.watch(
    ['./src/**/*.js', './src/**/*.json'],
    { events: 'all' },
    async function (cb) {
      console.log('重新编译中...')
      await run()
      console.log('编译成功!')
      cb()
    }
  )
}

export default main
