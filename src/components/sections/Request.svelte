<script>
  import Form from '../Form.svelte'
</script>

<section>
  <div class="section">
    <div class="h2 txt-b mrg-m mrg--b">Want some? Request bellow ;)</div>
    <p class="body-1 mrg-xxl mrg--b">
      Block explanation text. Help to understand what are you looking at, what
      options you have, etc
    </p>
    <Form class="body-2" />
  </div>
</section>

<style>
  section {
    background: var(--purple-light-1);
  }
  .section {
    background: url(treasure.svg) no-repeat right center;
    padding: 88px 0;
  }

  p {
    color: var(--fiord);
    max-width: 469px;
  }
</style>
