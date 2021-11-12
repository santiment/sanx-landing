<script>
  import { SlugColor } from './utils'

  export let assets

  $: allocations = getAllocation(assets)

  function getAllocation(assets) {
    return assets.map(({ slug, ticker, allocation }) => ({
      ticker,
      allocation: allocation * 100,
      color: SlugColor[slug],
    }))
  }
</script>

Assets USD distribution
<div class="allocations row mrg-l mrg--t mrg--b">
  {#each allocations as { ticker, allocation, color } (ticker)}
    <div class="allocation" style="width:{allocation}%;background:{color}" />
  {/each}
</div>

<div class="assets row caption v-center">
  {#each allocations as { ticker, allocation, color } (ticker)}
    <div class="asset" style="--color:{color}">
      <span>{ticker},</span>
      {+allocation.toFixed(2)}%
    </div>
  {/each}
</div>

<style lang="scss">
  .allocations {
    border-radius: 4px;
    overflow: hidden;
  }

  .allocation {
    height: 8px;
    margin-left: 2px;
    min-width: 6px;

    &:first-child {
      margin: 0;
    }
  }

  .assets {
    flex-wrap: wrap;
  }
  .asset {
    margin-right: 10px;

    &::before {
      content: '';
      height: 2px;
      width: 10px;
      background: var(--color);
      display: inline-block;
      border-radius: 1px;
      margin: 0 6px 3px 0px;
    }
  }
  span {
    color: var(--black);
  }
</style>
