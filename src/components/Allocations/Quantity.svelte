<script>
  export let item
  const { unit, slug, ticker = slug } = item
</script>

{unit.toFixed(6)}
<span>{ticker}</span>

<style>
  span {
    color: var(--casper);
  }
</style>
