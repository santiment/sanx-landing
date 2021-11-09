import * as sapper from '@sapper/app'
import { bootIntercom } from 'webkit/analytics/intercom'
import { startResponsiveController } from 'webkit/responsive'

startResponsiveController()

sapper.start({
  target: document.querySelector('#sapper'),
})

if (process.env.IS_DEV_MODE === false) {
  bootIntercom('cyjjko9u')
}
