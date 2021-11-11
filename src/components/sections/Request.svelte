<script>
  import Form from '../Form.svelte'
</script>

<section>
  <div class="section">
    <div class="h2 txt-b mrg-m mrg--b">Stay Tuned!</div>
    <p class="body-1 mrg-xxl mrg--b">
    Be the first to know about new SanX features and updates
    </p>
    <Form class="body-2" />
  </div>
</section>

<style>
  section {
    background: var(--purple-light-1);
  }
  .section {
    background: url(treasure.svg) no-repeat center 64px;
    padding: 301px 16px 64px;
    background-size: 401px;
  }

  :global(.desktop) .section {
    background-position: right center;
    padding: 88px 0;
    background-size: auto;
  }

  p {
    color: var(--fiord);
    max-width: 469px;
  }
</style>
