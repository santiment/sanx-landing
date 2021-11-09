<script>
  import { IsMobile } from 'webkit/stores/responsive'
  import Block from './Block.svelte'
  import { indexOverview } from './indexOverview'
  import { returnPolicy } from './returnPolicy'
  import { signals } from './signals'

  const blocks = [indexOverview, returnPolicy, signals]
</script>

<section class="section" id="methodology">
  <div class:header={$IsMobile}>
    <h2 class={$IsMobile ? 'h3' : 'h2'}>Unearth the on-chain alpha</h2>
    <p class="body-1 mrg-l mrg--t description">
      Our rebalancing strategy combines on-chain and financial signals for top
      DeFi assets. A hybrid approach that’s more than the sum of its parts.
    </p>
  </div>

  <div class="blocks">
    {#each blocks as block}
      <Block isAlwaysOpened={$IsMobile === false} {...block} />
    {/each}
  </div>
</section>

<style>
  section {
    padding: 64px 15px;
  }

  :global(.desktop) section {
    padding: 82px 0;
  }

  .header {
    margin: 0 -16px;
    background: var(--whale);
    padding: 64px 16px;
  }

  .description {
    color: var(--fiord);
    max-width: 574px;
  }
</style>
