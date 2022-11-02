import gulp from 'gulp'
import clean from 'gulp-clean'

import run from './src/index.js'

async function gulpClean() {
  await gulp.src('./themes/**/*.json', { read: true }).pipe(clean())
}

async function main() {
  await run()
  gulp.watch(
    ['./src/**/*.js', './src/**/*.json'],
    { events: 'all' },
    async function (cb) {
      console.log('重新编译中...')
      gulpClean()
      await run()
      console.log('编译成功!')
      cb()
    }
  )
}

export default main
