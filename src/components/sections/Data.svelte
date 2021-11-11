<script>
  import { IsMobile } from 'webkit/stores/responsive'
  import Allocations from '@cmp/Allocations/index.svelte'
  import MobileAllocations from '@cmp/Allocations/Mobile.svelte'
</script>

<section id="allocations">
  <div class="section">
    <div class="header">
      <h2 class="h2">On-chain signals for your DeFi portfolio</h2>
      <p class="body-1 mrg-l mrg--t">
        Manage your exposure in DeFi based on the behavior of 1000s of token
        holders, sourced directly from the blockchain.
      </p>
    </div>

    {#if process.browser}
      {#if $IsMobile}
        <MobileAllocations />
      {:else}
        <Allocations />
      {/if}
    {/if}
  </div>
</section>

<style>
  :global(.desktop) section {
    padding: 88px 0;
    background: var(--whale);
  }

  :global(body:not(.desktop)) .header {
    background: var(--whale);
    padding: 64px 15px;
    margin: 0 -16px;
  }

  p {
    color: var(--fiord);
    max-width: 574px;
  }
</style>
