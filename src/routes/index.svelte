<script>
  import { IsMobile } from 'webkit/stores/responsive'
  import BackToTop from 'webkit/ui/BackToTop.svelte'
  import HelpFeedback, { showIntercom } from 'webkit/ui/HelpFeedback.svelte'
  import CookiesPopup from 'webkit/ui/CookiesPopup.svelte'
  import Footer from 'webkit/ui/Footer/svelte'
  import Nav from '@cmp/Nav/index.svelte'
  import Header from '@cmp/sections/Header.svelte'
  import Data from '@cmp/sections/Data.svelte'
  import Methodology from '@cmp/sections/Methodology/index.svelte'
  import Request from '@cmp/sections/Request.svelte'
</script>

<svelte:head>
  <title>SanX</title>
</svelte:head>

<Nav />

{#if $IsMobile === false}
  <BackToTop class="$style.scroll" />
  <HelpFeedback class="$style.help" on:click={showIntercom} />
{/if}

<Header />

<Data />

<Methodology />

<Request />

<Footer class="section" />

{#if process.browser}
  <CookiesPopup />
{/if}

<style>
  .scroll,
  .help {
    --bg: var(--purple);
    --bg-hover: var(--purple-hover);
  }

  .help {
    position: fixed;
    top: 40%;
    right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
</style>
