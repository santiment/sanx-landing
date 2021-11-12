<script>
  import { millify } from 'webkit/utils/formatting'
  import { usdFormatter } from '../Allocations/utils'

  export let assets

  $: totalBalance = getTotalBalance(assets)

  function getTotalBalance(assets) {
    let total = 0
    for (let i = assets.length - 1; i > -1; i--) {
      total += assets[i].balanceUsd
    }
    return total
  }
</script>

Current balance
<h3 class="mrg-xs mrg--t mrg--b">
  <span class="h4">{usdFormatter(totalBalance)}</span> USD
</h3>
{#each assets as { slug, ticker = slug, balanceUsd }}
  <span class="asset">
    {ticker} ${millify(balanceUsd)}
  </span>
{/each}

<style>
  .h4 {
    color: var(--black);
  }

  .asset {
    margin-right: 6px;
  }
</style>
