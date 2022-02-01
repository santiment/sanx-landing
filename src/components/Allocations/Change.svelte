<script>
  import Svg from 'webkit/ui/Svg/svelte'

  export let change = 3.24
</script>

<div class="row v-center change" class:up={change >= 0}>
  <span class="direction row hv-center mrg-xs mrg--r">
    <Svg id="triangle" w="6" h="4" />
  </span>
  {change}%
</div>

<style>
  .change {
    position: relative;
    color: var(--red);
    --color: var(--red);
    --bg: var(--red-light-1);
  }
  .up {
    color: #26c953;
    --color: #26c953;
    --bg: #d6f6d6;
  }

  .direction {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    fill: var(--color);
    background: var(--bg);
  }
</style>
