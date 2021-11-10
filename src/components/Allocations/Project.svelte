<script>
  export let item
  const { slug, ticker = '', name = slug } = item

  let error = false
</script>

<div class="row v-center">
  <img
    class="mrg-s mrg--r"
    alt="Project"
    on:error={() => (error = true)}
    src="https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_{slug}.png" />
  {name}
  <span class="mrg-xs mrg--l">{ticker}</span>
</div>

<style>
  img {
    width: 20px;
    height: 20px;
  }
  span {
    color: var(--casper);
  }
</style>
