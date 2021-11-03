<script>
  import Allocations from '@cmp/Allocations/index.svelte'
  import { IsMobile } from '@/stores/responsive'
</script>

{#if $IsMobile === false}
  <section id="allocations">
    <div class="section">
      <h2 class="h2">On-chain signals for your DeFi portfolio</h2>
      <p class="body-1 mrg-l mrg--t">
        Manage your exposure in DeFi based on the behavior of 1000s of token
        holders, sourced directly from the blockchain.
      </p>

      <!-- <Allocations /> -->
    </div>
  </section>
{/if}

<style>
  section {
    background: var(--whale);
    padding: 88px 0;
  }

  p {
    color: var(--fiord);
    max-width: 574px;
  }
</style>
