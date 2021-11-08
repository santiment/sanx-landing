<script>
  import { IsMobile } from '@/stores/responsive'
  import Bottom from './Bottom.svelte'
  import Form from '../Form.svelte'
</script>

<footer class="section">
  <div class="body-2 row top justify">
    <div class="description column">
      <a href="https://santiment.net/" class="mrg-l mrg--b"
        ><img alt="Santiment" src="webkit/illus/santiment.svg" /></a>
      Behavioral analytics for the crypto market
    </div>
    <div class="grid">
      <a href="https://santiment.net/about/" target="_blank" class="link"
        >About us</a>
      <a href="https://santiment.net/pricing/" target="_blank" class="link"
        >Pricing</a>
      <a href="https://santiment.net/team/" target="_blank" class="link"
        >Team</a>
      <a href="https://santiment.net/jobs/" target="_blank" class="link"
        >Jobs</a>
      <a href="mailto:support@santiment.net" target="_blank" class="link"
        >Contact us</a>

      <a href="https://academy.santiment.net/" target="_blank" class="link"
        >Academy</a>
      <a href="https://insights.santiment.net/" target="_blank" class="link"
        >Insights</a>
      <a
        href="https://app.santiment.net/labs/trends"
        target="_blank"
        class="link">Social trends</a>
      <a
        href="https://app.santiment.net/labs/balance"
        target="_blank"
        class="link">Historical balance</a>
      <a
        href="https://academy.santiment.net/san-tokens/how-to-buy-san/"
        target="_blank"
        class="link">Buy SAN</a>

      <a href="https://app.santiment.net/" target="_blank" class="link"
        >Sanbase</a>
      <a href="https://api.santiment.net/" target="_blank" class="link"
        >SanAPI</a>
      <a href="https://sheets.santiment.net/" target="_blank" class="link"
        >Sansheets</a>
      <a href="https://graphs.santiment.net/" target="_blank" class="link"
        >Graphs</a>
    </div>
    <div class="forms">
      <h4 class="txt-m mrg-m mrg--b">Subscribe to the weekly Digest!</h4>
      <Form
        class="mrg-xl mrg--b $style.form {$IsMobile ? '' : 'body-3'}"
        label="Subscribe" />

      <h4 class="txt-m mrg-m mrg--b">Download Santiment app</h4>
      <a
        target="_blank"
        class="google"
        href="https://play.google.com/store/apps/details?id=net.santiment.sanbase.android">
        <img alt="Google" src="webkit/illus/google-app.svg" />
      </a>
    </div>
  </div>

  <Bottom />
</footer>

<style lang="scss">
  :global(footer a:hover) {
    color: var(--purple);
    fill: var(--purple);
  }

  .top {
    color: var(--waterloo);
    padding: 56px 0 40px;
  }

  .forms {
    --max-width: 100%;
  }

  .form {
    width: 386px;
  }

  .google {
    display: block;
    line-height: 0;
  }

  .grid {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(7, 1fr);
    gap: 16px 70px;
    margin: 40px 0;
  }

  :global(.phone-xs),
  :global(.phone),
  :global(.tablet) {
    .top {
      flex-direction: column;
    }

    .form {
      margin-bottom: 40px;
    }
  }

  :global(.desktop) {
    .description {
      max-width: 124px;
    }

    .top {
      padding: 63px 0 53px;
    }

    .grid {
      grid-template-rows: repeat(5, 1fr);
      margin: 0;
    }
  }
</style>
