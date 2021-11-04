<script>
  import BackToTop from 'webkit/ui/BackToTop.svelte'
  import HelpFeedback from 'webkit/ui/HelpFeedback.svelte'
  import { IsMobile } from '@/stores/responsive'
  import Nav from '@cmp/Nav.svelte'
  import Header from '@cmp/sections/Header.svelte'
  import Data from '@cmp/sections/Data.svelte'
  import Methodology from '@cmp/sections/Methodology/index.svelte'
  import Request from '@cmp/sections/Request.svelte'
  import Footer from '@cmp/Footer/index.svelte'
</script>

<svelte:head>
  <title>SanX</title>
</svelte:head>

<Nav />

{#if $IsMobile === false}
  <BackToTop class="$style.scroll" />
  <HelpFeedback class="$style.help" />
{/if}

<Header />

<Data />

<Methodology />

<Request />

<Footer />

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
