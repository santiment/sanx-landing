<script>
  import { copy } from 'webkit/utils'
  import Svg from 'webkit/ui/Svg.svelte'
  import More from './More.svelte'
  import Allocations from './Allocations.svelte'
  import Balance from './Balance.svelte'

  let assets = [
    {
      ticker: 'UNI',
      allocation: 54.6,
    },
    {
      ticker: 'AAVE',
      allocation: 14.5,
    },
    {
      ticker: 'MKR',
      allocation: 10.3,
    },
    {
      ticker: 'COMP',
      allocation: 7.1,
    },
    {
      ticker: 'SUSHI',
      allocation: 5,
    },
    {
      ticker: 'YFI',
      allocation: 4.4,
    },
    {
      ticker: 'SNX',
      allocation: 3.9,
    },
    {
      ticker: 'WETH',
      allocation: 0.1,
    },
  ]

  let copyCancel
  let copyLabel = 'Copy'
  function copyAddress() {
    if (copyCancel) copyCancel()

    copyLabel = 'Copied!'
    copyCancel = copy(
      '0xc7c9f0d98123d48f6720cd36d0da09b603173613',
      () => (copyLabel = 'Copy'),
    )
  }
</script>

<div class="wallet">
  <div class="address">
    <div class="row v-center">
      Contract address
      <button class="btn mrg-a mrg--l row v-center" on:click={copyAddress}
        >{copyLabel}
        <Svg id="copy" w="16" class="mrg-s mrg--l" />
      </button>
    </div>
    <h3 class="body-1 mrg-s mrg--t">
      0xc7c9f0d98123d48f6720cd36d0da09b603173613
    </h3>
  </div>

  <div class="more">
    <More />
  </div>

  <div class="allocations">
    <Allocations {assets} />
  </div>

  <div class="balance">
    <Balance {assets} />
  </div>
</div>

<style lang="scss">
  .wallet {
    color: var(--waterloo);
    display: grid;
    grid-template-columns: repeat(2, 50%);
    margin: 0 0 64px;
  }
  :global(.desktop) .wallet {
    margin: 0 0 88px;
  }

  .address,
  .more {
    padding: 20px 32px;
    background: var(--purple-light-1);
  }
  .address {
    border-top-left-radius: 4px;
  }
  .more {
    border-top-right-radius: 4px;
    padding-left: 70px;
  }

  h3 {
    color: var(--black);
    overflow: hidden;
    text-overflow: ellipsis;

    :global(.desktop) & {
      font-size: 24px;
      line-height: 32px;
    }
  }

  .allocations,
  .balance {
    border: 1px solid var(--porcelain);
    border-top: 0;
    padding: 40px 32px;
  }

  .allocations {
    border-right: 0;
    border-bottom-left-radius: 4px;
  }
  .balance {
    border-left: 0;
    border-bottom-right-radius: 4px;
    padding-left: 70px;
  }

  button {
    --color: var(--accent);
    --color-hover: var(--accent-hover);
  }
</style>
