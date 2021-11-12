<script>
  export let assets
</script>

Current balance
<h3 class="mrg-xs mrg--t mrg--b">
  <span class="h4">$248,715.41</span> USD
</h3>
{#each assets as { ticker, allocation }}
  <span class="asset">
    {ticker} ${allocation}K
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
