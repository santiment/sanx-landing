<script>
  import { IsMobile } from 'webkit/stores/responsive'
  import { usdFormatter } from './utils'

  export let item
  const { quantityPerToken, slug, ticker = slug, pricePerToken } = item
</script>

{quantityPerToken.toFixed(6)}
<span>{ticker}</span>

{#if $IsMobile}
  <div>{usdFormatter(pricePerToken)}</div>
{/if}

<style>
  span {
    color: var(--casper);
  }
</style>
