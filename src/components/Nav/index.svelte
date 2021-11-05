<script>
  import { IsMobile } from '@/stores/responsive'
  import Products from '@cmp/Products/index.svelte'
  import Svg from 'webkit/ui/Svg.svelte'
  import MobileMenu from './MobileMenu.svelte'

  let isMenuOpened = false
</script>

<nav class:fixed={isMenuOpened}>
  <div class="section row v-center">
    <a href="/" class="body-2 txt-m mrg-l mrg--r title row v-center">
      <img
        src="webkit/illus/san-logo.svg"
        alt="SAN"
        class="mrg-s mrg--r logo" />
      SanX</a>

    {#if $IsMobile}
      <Svg
        id="cross"
        w="12"
        class="mrg-a mrg--l"
        on:click={() => (isMenuOpened = !isMenuOpened)} />
    {:else}
      <Products />

      <!-- <a class="link" href="#metrics">Metrics</a> -->
      <!-- <a class="link" href="#changes">Changes</a> -->
      <!-- <a class="link" href="#allocations">Allocations</a> -->
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

  .title {
    color: var(--black);
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

  .logo {
    width: 32px;
    height: 32px;
  }

  .fixed {
    position: fixed;
    z-index: 10;
    background: var(--white);
    width: 100%;
  }
</style>
