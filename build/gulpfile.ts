import { series, parallel } from 'gulp'
import {run, withTashName} from "./utils/index"

export default series(
  withTashName('clean', async () => run('rm -rf ./dist')),
  withTashName('buildPackages', async () => run('pnpm run --filter ./packages --parallel build')),
)