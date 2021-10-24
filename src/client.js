import * as sapper from '@sapper/app'
import { bootIntercom } from 'webkit/analytics/intercom'
import 'webkit/responsive'

sapper.start({
  target: document.querySelector('#sapper'),
})

if (process.env.IS_DEV_MODE === false) {
  bootIntercom('cyjjko9u')
}
