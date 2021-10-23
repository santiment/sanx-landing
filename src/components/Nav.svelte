<script>
  import Products from '@cmp/Products/index.svelte'
</script>

<nav>
  <div class="section row v-center">
    <a href="/" class="body-2 txt-m mrg-l mrg--r title row v-center">
      <img
        src="webkit/illus/san-logo.svg"
        alt="SAN"
        class="mrg-s mrg--r logo" />
      SanX</a>

    <Products />

    <a class="link" href="#metrics">Metrics</a>
    <a class="link" href="#changes">Changes</a>
    <a class="link" href="#allocations">Allocations</a>
    <a class="link" href="#methodology">Methodology</a>

    <a class="btn border mrg-a mrg--l" href="/">Log in</a>

    <a class="btn border login mrg-l mrg--l" href="/">Create an account </a>
  </div>
</nav>

<style>
  nav {
    border-bottom: 1px solid var(--porcelain);
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

  .btn {
    padding: 5px 20px;
    --color-hover: var(--purple-hover);
  }

  .login {
    --border: var(--purple);
    --color: var(--purple);
  }

  .logo {
    width: 32px;
    height: 32px;
  }
</style>
