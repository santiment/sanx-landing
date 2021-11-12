<script>
  export let assets
</script>

Assets USD distribution
<div class="allocations row mrg-l mrg--t mrg--b">
  {#each assets as { ticker, allocation } (ticker)}
    <div class="allocation" style="width:{allocation}%" />
  {/each}
</div>

<div class="assets row caption v-center">
  {#each assets as { ticker, allocation } (ticker)}
    <div class="asset">
      <span>{ticker},</span>
      {allocation}%
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
    background: red;
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
      background: var(--color, red);
      display: inline-block;
      border-radius: 1px;
      margin: 0 6px 3px 0px;
    }
  }
  span {
    color: var(--black);
  }
</style>
