<script>
  import { IsMobile } from 'webkit/stores/responsive'
  import Product from 'webkit/ui/Product.svelte'
  import Products from 'webkit/ui/Products/svelte'
  import Svg from 'webkit/ui/Svg.svelte'
  import MobileMenu from './MobileMenu.svelte'

  let isMenuOpened = false
</script>

<nav class:fixed={isMenuOpened}>
  <div class="section row v-center">
    <Product title="SanX" class="mrg-l mrg--r" />

    {#if $IsMobile}
      <Svg
        id={isMenuOpened ? 'cross' : 'menu'}
        w={isMenuOpened ? '12' : '16'}
        h="12"
        class="mrg-a mrg--l $style.menu"
        on:click={() => (isMenuOpened = !isMenuOpened)} />
    {:else}
      <Products />

      <!-- <a class="link" href="#metrics">Metrics</a> -->
      <!-- <a class="link" href="#changes">Changes</a> -->
      <a class="link" href="#allocations">Allocations</a>
      <a class="link" href="#methodology">Methodology</a>

      <!-- <a class="btn border mrg-a mrg--l" href="/">Log in</a> -->

      <!-- <a class="btn border login mrg-l mrg--l" href="/">Create an account</a> -->
    {/if}
  </div>
</nav>

{#if isMenuOpened} <MobileMenu /> {/if}

<style>
  nav {
    border-bottom: 1px solid var(--porcelain);
    padding: 16px 0;
  }
  :global(.desktop) nav {
    padding: 19px 0;
  }

  .link {
    color: var(--waterloo);
    margin-right: 32px;
  }
  .link:hover {
    color: var(--purple);
  }

  /* .btn {
    padding: 5px 20px;
    --color-hover: var(--purple-hover);
    }

    .login {
    --border: var(--purple);
    --color: var(--purple);
    } */

  .fixed {
    position: fixed;
    z-index: 10;
    background: var(--white);
    width: 100%;
  }

  .menu {
    fill: var(--waterloo);
  }
</style>
