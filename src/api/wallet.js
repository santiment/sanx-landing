import { query } from 'webkit/api'
import { queryProjects } from './projects'

export const WALLET_ASSETS_QUERY = `
query {
  assetsHeldByAddress(
    selector: {address: "0xc7c9f0d98123d48f6720cd36d0da09b603173613", infrastructure: "ETH"}
  ) {
    slug
    balance
    balanceUsd
  }
}
`

const sorter = (a, b) => b.balanceUsd - a.balanceUsd
const precacher =
  () =>
  ({ assetsHeldByAddress: assets }) => {
    assets.sort(sorter)

    let total = 0
    for (let i = assets.length - 1; i > -1; i--) {
      total += assets[i].balanceUsd
    }

    const SlugProject = {}
    for (let i = assets.length - 1; i > -1; i--) {
      const asset = assets[i]
      const { slug, balanceUsd, balance } = asset
      asset.allocation = balanceUsd / total
      asset.priceUsd = balanceUsd / balance
      SlugProject[slug] = asset
    }

    return queryProjects(Object.keys(SlugProject)).then((projects) => {
      for (let i = projects.length - 1; i > -1; i--) {
        const project = projects[i]
        Object.assign(SlugProject[project.slug], project)
      }
      return assets
    })
  }

const options = { precacher }
export function queryWalletAssets() {
  return query(WALLET_ASSETS_QUERY, options)
}
