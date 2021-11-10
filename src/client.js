import * as sapper from '@sapper/app'
import { bootIntercom } from 'webkit/analytics/intercom'
import { startResponsiveController } from 'webkit/responsive'

window.IS_STAGE_BACKEND = (
  process.env.IS_DEV_MODE ? process.env.BACKEND_URL : window.location.host
).includes('-stage')

window.IS_PROD_BACKEND = !window.IS_STAGE_BACKEND

process.env.IS_DEV_MODE
  ? !process.env.BACKEND_URL.includes('-stage')
  : !window.location.host.includes('-stage')

window.GQL_SERVER_URL = process.env.IS_DEV_MODE
  ? process.env.BACKEND_URL + '/graphql'
  : `https://api${window.IS_PROD_BACKEND ? '' : '-stage'}.santiment.net/graphql`

startResponsiveController()

sapper.start({
  target: document.querySelector('#sapper'),
})

if (process.env.IS_DEV_MODE === false) {
  bootIntercom('cyjjko9u')
}
