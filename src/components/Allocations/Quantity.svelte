<script>
  import { IsMobile } from 'webkit/stores/responsive'
  import { usdFormatter } from './utils'

  export let item
  const { unit, slug, ticker = slug, pricePerToken } = item
</script>

{unit.toFixed(6)}
<span>{ticker}</span>

{#if $IsMobile}
  <div>{usdFormatter(pricePerToken)}</div>
{/if}

<style>
  span {
    color: var(--casper);
  }
</style>
