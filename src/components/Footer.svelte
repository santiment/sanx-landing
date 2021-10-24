<script>
  import Svg from 'webkit/ui/Svg.svelte'
  import Form from './Form.svelte'
</script>

<footer class="section">
  <div class="body-2 row top justify">
    <div class="description">
      <a href="https://santiment.net/"
        ><img
          alt="Santiment"
          src="webkit/illus/santiment.svg"
          class="mrg-l mrg--b" /></a>
      Behavioral analytics for the crypto market
    </div>
    <div class="column">
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >About us</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Pricing</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Team</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Jobs</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Contact us</a>
    </div>
    <div class="column">
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Academy</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Insights</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Social trends</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Historical balance</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Buy SAN</a>
    </div>
    <div class="column">
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Sanbase</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >SanAPI</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Sansheets</a>
      <a href="https://santiment.net/terms/" target="_blank" class="link"
        >Graphs</a>
    </div>
    <div class="forms">
      <h4 class="txt-m mrg-m mrg--b">Subscribe to the weekly Digest!</h4>
      <Form class="mrg-xl mrg--b body-3 $style.form" label="Subscribe" />

      <h4 class="txt-m mrg-m mrg--b">Download Santiment app</h4>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=net.santiment.sanbase.android">
        <img alt="Google" src="webkit/illus/google-app.svg" />
      </a>
    </div>
  </div>
  <div class="bottom row">
    © 2016—2021 Santiment
    <a href="https://santiment.net/terms/" target="_blank" class="extra"
      >Terms</a>
    <a
      href="https://app.santiment.net/privacy-policy"
      target="_blank"
      class="extra">Privacy</a>
    <a
      href="https://www.notion.so/santiment/Santiment-Media-ff72838a16164db4b7e90478e18c3776"
      target="_blank"
      class="mrg-a mrg--r extra">Media Kit</a>

    <div class="socials">
      <a
        href="https://twitter.com/santimentfeed"
        target="_blank"
        class="social">
        <Svg id="twitter" w="20" h="16" />
      </a>
      <a href="https://github.com/santiment" target="_blank" class="social">
        <Svg id="github" w="20" h="20" />
      </a>
      <a href="https://santiment.net/discord" target="_blank" class="social">
        <Svg id="discord" w="20" h="14" />
      </a>
      <a href="https://t.me/santiment_network" target="_blank" class="social">
        <Svg id="telegram" w="20" h="16" />
      </a>
      <a
        href="https://www.youtube.com/c/santimentnetwork"
        target="_blank"
        class="social">
        <Svg id="youtube" w="20" h="14" />
      </a>
    </div>
  </div>
</footer>

<style>
  .bottom {
    padding: 24px 0;
    border-top: 1px solid var(--porcelain);
    color: var(--casper);
  }

  .top {
    color: var(--waterloo);
    padding: 63px 0 53px;
  }

  .description {
    max-width: 124px;
  }

  a:hover {
    color: var(--purple);
    fill: var(--purple);
  }

  .link {
    margin: 16px 0 0;
  }
  .link:first-child {
    margin: 0;
  }

  .extra {
    margin-left: 35px;
  }
  .extra:first-child {
    margin-left: auto;
  }

  .socials {
    fill: var(--black);
  }

  .forms {
    --max-width: 100%;
  }

  .social {
    margin-left: 35px;
  }

  .form {
    width: 386px;
  }
</style>
