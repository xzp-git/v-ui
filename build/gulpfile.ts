import { series, parallel } from 'gulp'

const withTashName = (name,fn) => Object.assign(fn,{displayName:name})

export default series(
  withTashName('clean', async () => {console.log('clean1');}),
  withTashName('clean', async () => {console.log('clean2');}),
  withTashName('clean', async () => {console.log('clean3');})
)