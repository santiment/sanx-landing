import { query } from 'webkit/api'
import { queryWalletAssets } from './wallet'

export const WALLET_TOTAL_SUPPLY_QUERY = `
query {
  getMetric(metric: "total_supply") {
    totalSupply:aggregatedTimeseriesData(
      selector: { contractAddress: "0xc7c9f0d98123d48f6720cd36d0da09b603173613" }
      aggregation: LAST
      to: "utc_now",
      from:"utc_now-1d"
    ) 
  }
}
`

const precacher =
  () =>
  ({ getMetric: { totalSupply } }) =>
    queryWalletAssets().then((assets) => {
      for (let i = assets.length - 1; i > -1; i--) {
        const asset = assets[i]
        const { balance, priceUsd } = asset
        const quantityPerToken = balance / totalSupply
        asset.quantityPerToken = quantityPerToken
        asset.pricePerToken = priceUsd * quantityPerToken
      }
      return assets
    })

const options = { precacher }
export function queryAllocations() {
  return query(WALLET_TOTAL_SUPPLY_QUERY, options).catch(() => [])
}
