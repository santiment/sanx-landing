<script>
  import { IsMobile } from 'webkit/stores/responsive'
  import { usdFormatter } from './utils'

  export let item
  const { slug, ticker = '', name = slug, priceUsd } = item

  let error = false
</script>

<div class="row v-center">
  <img
    class="mrg-s mrg--r"
    alt="Project"
    on:error={() => (error = true)}
    src="https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_{slug}.png" />
  <span class="name">
    {name}
  </span>

  {#if $IsMobile === false}
    <span class="label mrg-xs mrg--l">{ticker}</span>
  {/if}
</div>

{#if $IsMobile}
  <div class="price">
    <span class="label">Price</span>
    {usdFormatter(priceUsd)}
  </div>
{/if}

<style>
  img {
    width: 20px;
    height: 20px;
  }

  .label {
    color: var(--casper);
  }

  .price {
    margin-left: 28px;
  }

  .name {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
