<script>
  import BackToTop from 'webkit/ui/BackToTop.svelte'
  import HelpFeedback from 'webkit/ui/HelpFeedback.svelte'
  import Nav from '@cmp/Nav.svelte'
  import Header from '@cmp/sections/Header.svelte'
  import Data from '@cmp/sections/Data.svelte'
  import Methodology from '@cmp/sections/Methodology.svelte'
  import Request from '@cmp/sections/Request.svelte'
  import Footer from '@cmp/Footer.svelte'
</script>

<svelte:head>
  <title>SanX</title>
</svelte:head>

<Nav />

<BackToTop class="$style.scroll" />

<Header />

<Data />

<Methodology />

<Request />

<Footer />

<HelpFeedback class="$style.help" />

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
